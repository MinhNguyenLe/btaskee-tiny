import { Services } from "./collection";

Meteor.methods({
  "services.getAll"(isResetWeight) {
    const listServices = Services.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
    ).fetch();

    //cheat
    if (isResetWeight) {
      console.log("!!!!! cheat reset weight");

      listServices.forEach((service, index) => {
        Services.update(service._id, {
          $set: { weight: index },
        });
      });
    }

    return Services.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
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
