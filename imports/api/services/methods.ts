import { Services } from "./collection";
import { check, Match } from "meteor/check";
import { Migrations } from "meteor/percolate:migrations";


Meteor.methods({
  "services.migration"(version?: number) {
    console.log(version, typeof version, " -> version");

    Migrations.migrateTo(version + ",rerun" || "latest");
    Migrations.getVersion();
    const services = Services.find({}).fetch();

    return { message: "Done", data: services };
  },

  "services.getAll"(isResetWeight) {
    const test = ["1", 2, 3];

    check(test, [Match.OneOf(Number, String)]);

    check(isResetWeight, Boolean);
    //cheat
    if (isResetWeight) {
      console.log("!!!!! cheat reset weight");

      const listServices = Services.find(
        {},
        { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
      ).fetch();

      listServices.forEach((service, index) => {
        Services.update(service._id, {
          $set: { weight: index },
        });
      });
    }

    return Services.find(
      {}
      // { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
    ).fetch();
  },

  "services.getById"(idService: string) {
    if (!idService) {
      throw new Meteor.Error("Id not found");
    } else return Services.findOne({ _id: idService });
  },

  "services.insert"(data) {
    if (typeof data !== "object") {
      throw new Meteor.Error("No data to insert");
    } else Services.insert(data);
  },

  "services.updateById"(idService, data) {
    if (typeof data !== "object" || !idService) {
      throw new Meteor.Error("No data or idService to update");
    } else Services.update(idService, data);
  },

  "services.deleteById"(idService) {
    if (!idService) {
      throw new Meteor.Error("No idService to delete");
    } else Services.remove({ _id: idService });
  },

  "services.updateByDragAndDrop"(listNewOrders) {
    if (!listNewOrders || !Array.isArray(listNewOrders)) {
      throw new Meteor.Error("Data is not array!");
    }

    listNewOrders.forEach((newOrder) => {
      Services.update(newOrder.idService, {
        $set: { weight: newOrder.weight },
      });
    });
  },
});
