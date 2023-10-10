import { Mongo } from "meteor/mongo";

export const Services = new Mongo.Collection("service");
export const FATransaction = new Mongo.Collection("FATransaction");
export const Users = new Mongo.Collection("users2");
export const FinancialAccount = new Mongo.Collection("financialAccount");
export const MigrateTransactionLogger = new Mongo.Collection(
  "temp_migrateTransactionLogger"
);
export const Summary = new Mongo.Collection("vn_summary");
