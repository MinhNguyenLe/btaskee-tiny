import { Mongo } from "meteor/mongo";

export const ServicesCollection = new Mongo.Collection("services");

Meteor.methods({
  getListServicesForTable() {
    return ServicesCollection.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1 } }
    ).fetch();
  },

  getServiceDetail(idService: string) {
    return ServicesCollection.findOne({ _id: idService });
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
});
