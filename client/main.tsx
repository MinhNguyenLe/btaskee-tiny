import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom"; // dispatcher
import AppProvider from "../imports/ui/AppProvider";

//why ?
Meteor.startup(() => {
  render(<AppProvider />, document.getElementById("react-target"));
});
