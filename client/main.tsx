import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom"; // dispatcher
import AppProvider from "../imports/ui/AppProvider";
import { BrowserRouter } from "react-router-dom";

//why ?
Meteor.startup(() => {
  render(
    <BrowserRouter>
      <AppProvider />
    </BrowserRouter>,
    document.getElementById("react-target")
  );
});
