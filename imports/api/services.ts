import { Mongo } from "meteor/mongo";

export const ServicesCollection = new Mongo.Collection("services");

const verifyWeightRecord = (services) => {
  return services.map((service, index) => {
    return {
      ...service,
      weight: index,
    };
  });
};

Meteor.methods({
  getListServicesForTable() {
    const listServices = ServicesCollection.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1, weight: 1 } }
    ).fetch();

    // return verifyWeightRecord(listServices);
    return listServices;
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
      return ServicesCollection.remove({ _id: idService });
    } else throw new Error("Id not found");
  },

  updateAfterDragAndDropRecord(data) {},
});
