import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom"; // dispatcher
import AppProvider from "../imports/ui/AppProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../imports/ui/redux/store";

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AppProvider />
      </BrowserRouter>
    </Provider>,
    document.getElementById("react-target")
  );
});
