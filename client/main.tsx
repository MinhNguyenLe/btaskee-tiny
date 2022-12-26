import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "../imports/ui/App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const queryClient = new QueryClient();

Meteor.startup(() => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LocalizationProvider>,
    document.getElementById("react-target")
  );
});
