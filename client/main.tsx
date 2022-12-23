import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "../imports/ui/App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

Meteor.startup(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    document.getElementById("react-target")
  );
});
