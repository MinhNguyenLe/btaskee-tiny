import { Meteor } from "meteor/meteor";
import { ServicesCollection } from "../imports/api/services";

Meteor.startup(async () => {
  if ((await ServicesCollection.find().countAsync()) === 0) {
  }
});
