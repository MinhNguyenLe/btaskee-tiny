import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { App } from "./App";
import { SnackbarProvider } from "notistack";

export const queryClient = new QueryClient();

const AppProvider = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default AppProvider;
