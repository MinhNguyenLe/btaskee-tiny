import { Meteor } from "meteor/meteor";
import Services from "../imports/api/services";

import "/imports/api/services/methods";

//why
Meteor.startup(async () => {
  if ((await Services.find().countAsync()) === 0) {
  }
});
