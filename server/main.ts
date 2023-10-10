import { Meteor } from "meteor/meteor";
import { Migrations } from "meteor/percolate:migrations";
import "/imports/api/services/methods";
import {
  Users,
  FATransaction,
  MigrateTransactionLogger,
  Summary,
} from "../imports/api/services/collection";
import { Promise } from "meteor/promise";

import moment from "moment";

const v8 = require("v8");

Migrations.add({
  version: 1,
  name: "VERSION 1",
  up: function () {
    const startMemoryUsage = v8.getHeapStatistics();
    console.log("startMemoryUsage --> ", startMemoryUsage);

    const stackLimit = 1000;
    let stackOrder = 1;

    Users.update(
      {},
      { $unset: { migratedTransactionsStatus: 1 } },
      { multi: true }
    );

    function stack1000() {
      let users: any = Promise.await(
        Users.rawCollection()
          .aggregate([
            {
              $match: {
                migratedTransactionsStatus: { $exists: false },
              },
            },
            {
              $lookup: {
                from: "FATransaction",
                localField: "_id",
                foreignField: "userId",
                as: "FATransaction",
              },
            },
            {
              $lookup: {
                from: "financialAccount",
                localField: "fAccountId",
                foreignField: "_id",
                as: "financialAccount",
              },
            },
            {
              $unwind: {
                path: "$financialAccount",
                preserveNullAndEmptyArrays: true,
              },
            },
            { $limit: stackLimit },
            {
              $project: {
                _id: 1,
                "financialAccount._id": 1,
                "financialAccount.FMainAccount": 1,
                "financialAccount.Promotion": 1,
                "FATransaction._id": 1,
                "FATransaction.amount": 1,
                "FATransaction.type": 1,
                "FATransaction.accountType": 1,
                "FATransaction.date": 1,
              },
            },
          ])
          .toArray()
      );

      if (!users.length) {
        console.log("Users length = 0 or undefined: ---> ", users);
        return;
      }

      for (let indexUser = 0; indexUser < users.length; indexUser++) {
        const userTarget = users[indexUser];

        // sort by date
        const transactions = userTarget.FATransaction;
        transactions.sort((a, b) => a.date - b.date);

        console.log(
          "transactions ---> ",
          transactions.map((t) => t.date)
        );

        if (!transactions.length) {
          Users.update(
            { _id: userTarget._id },
            {
              $set: { migratedTransactionsStatus: 0 }, // User not have transaction
            }
          );
        } else {
          let accumulateMainAccount = 0;
          let accumulatePromotionAccount = 0;

          let isDirtyTransaction = false;

          for (
            let indexTransaction = 0;
            indexTransaction < transactions.length;
            indexTransaction++
          ) {
            const { _id, amount, accountType, type } =
              transactions[indexTransaction];

            if (!_id || !amount || !type || !accountType) {
              isDirtyTransaction = true;
              MigrateTransactionLogger.insert({
                userId: userTarget._id,
                reason: "dirty transaction",
                transactionId: _id || "transaction not have _id",
              });

              break;
            }

            if (accountType === "M") {
              FATransaction.update(
                {
                  _id,
                },
                {
                  $set: {
                    before: accumulateMainAccount,
                  },
                }
              );

              if (type === "C") accumulateMainAccount -= amount;
              if (type === "W") accumulateMainAccount -= amount;
              if (type === "D") accumulateMainAccount += amount;
            } else {
              FATransaction.update(
                {
                  _id,
                },
                {
                  $set: {
                    before: accumulatePromotionAccount,
                  },
                }
              );

              if (type === "C") accumulatePromotionAccount -= amount;
              if (type === "W") accumulateMainAccount -= amount;
              if (type === "D") accumulatePromotionAccount += amount;
            }
          }

          if (isDirtyTransaction) {
            Users.update(
              { _id: userTarget._id },
              {
                $set: { migratedTransactionsStatus: 1 }, // dirty transaction
              }
            );
          } else {
            const financialAccountTarget = userTarget.financialAccount;

            if (!financialAccountTarget) {
              Users.update(
                { _id: userTarget._id },
                {
                  $set: { migratedTransactionsStatus: 2 }, // FinancialAccount not found
                }
              );

              MigrateTransactionLogger.insert({
                userId: userTarget._id,
                reason: "user not have financial account",
              });
            } else if (
              financialAccountTarget.FMainAccount !== accumulateMainAccount
            ) {
              Users.update(
                { _id: userTarget._id },
                {
                  $set: { migratedTransactionsStatus: 3 }, // Fail by FMainAccount
                }
              );

              MigrateTransactionLogger.insert({
                userId: userTarget._id,
                reason: "Fail by FMainAccount",
                createdAt: new Date(),
                currentFMainAccount: financialAccountTarget.FMainAccount,
                accumulateMainAccount,
              });
            } else if (
              financialAccountTarget.Promotion !== accumulatePromotionAccount
            ) {
              Users.update(
                { _id: userTarget._id },
                {
                  $set: { migratedTransactionsStatus: 4 }, // Fail by Promotion
                }
              );

              MigrateTransactionLogger.insert({
                userId: userTarget._id,
                reason: "Fail by Promotion",
                createdAt: new Date(),
                currentPromotionAccount: financialAccountTarget.Promotion,
                accumulatePromotionAccount,
              });
            } else {
              Users.update(
                { _id: userTarget._id },
                { $set: { migratedTransactionsStatus: 5 } } // Success
              );
            }
          }

          console.log("accumulateMainAccount   ", accumulateMainAccount);
          console.log(
            "accumulatePromotionAccount   ",
            accumulatePromotionAccount
          );
        }

        // process logger
        console.log(
          `Stack ${stackOrder}, done: ${indexUser + 1}/${users.length} users`
        );
      }
      console.log("done each stack");
      // make objects eligible for garbage collection sooner
      users = null;

      /**
       * for(2015 -> 2023){
       * }
       */

      stackOrder++;

      const endOnePhase = v8.getHeapStatistics();
      console.log(
        `Memory used (in bytes) each phase: ${
          endOnePhase.total_heap_size - startMemoryUsage.total_heap_size
        }`
      );

      stack1000();
    }

    stack1000();
  },
  down: function () {},
});

Migrations.add({
  version: 2,
  name: "VERSION 2",
  up() {
    FATransaction.find({}, { sort: { date: 1 }, limit: 1 });
  },
  down() {},
});

SyncedCron.add({
  name: "id1",
  schedule: function (parser) {
    return parser.recur().on(moment().add(10, "seconds").toDate()).fullDate();
  },
  job: function () {
    console.log("run job 1 in sync cron");
  },
});
SyncedCron.add({
  name: "id2",
  schedule: function (parser) {
    return parser.recur().on(moment().add(20, "seconds").toDate()).fullDate();
  },
  job: function () {
    console.log("run job 2 in sync cron");
  },
});

Meteor.startup(async () => {
  console.log("server running !");

  Migrations.migrateTo(2);
  SyncedCron.start();
});
