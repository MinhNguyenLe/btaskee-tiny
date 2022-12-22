import { Mongo } from "meteor/mongo";
import { Service } from "../ui/utils/types";

export const ServicesCollection = new Mongo.Collection<Service>("services");

Meteor.methods({
  getListServicesForTable(): Service[] {
    return ServicesCollection.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1 } }
    ).fetch();
  },
});
