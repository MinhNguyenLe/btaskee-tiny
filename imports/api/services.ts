import { Mongo } from "meteor/mongo";

export const ServicesCollection = new Mongo.Collection("services");

Meteor.methods({
  getListServicesForTable(isResetWeight) {
    const listServices = ServicesCollection.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
    ).fetch();

    //cheat
    if (isResetWeight) {
      console.log("!!!!! cheat reset weight");

      listServices.forEach((service, index) => {
        ServicesCollection.update(service._id, {
          $set: { weight: index },
        });
      });
    }

    return ServicesCollection.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
    ).fetch();
  },

  getServiceDetail(idService: string) {
    if (idService) {
      return ServicesCollection.findOne({ _id: idService });
    } else throw new Error("Id not found");
  },

  insertNewService(data) {
    if (typeof data === "object") {
      ServicesCollection.insert(data);
    } else throw new Error("No data to insert");
  },

  updateService(idService, data) {
    if (typeof data === "object") {
      ServicesCollection.update(idService, data);
    } else throw new Error("No data to update");
  },

  deleteService(idService) {
    if (idService) {
      ServicesCollection.remove({ _id: idService });
    } else throw new Error("Id not found");
  },

  updateAfterDragAndDropRecord(listNewOrders) {
    if (!listNewOrders || !Array.isArray(listNewOrders))
      throw new Error("Data is not array!");

    listNewOrders.forEach((newOrder) => {
      console.log("wtf ", newOrder);
      ServicesCollection.update(newOrder.idService, {
        $set: { weight: newOrder.weight },
      });
    });
  },
});
