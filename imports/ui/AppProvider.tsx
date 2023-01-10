import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useRef } from "react";
import { App } from "./App";
import { SnackbarProvider } from "notistack";
import ConfirmDialog from "./components/base/Dialog/ConfirmDialog";
import customHooks from "./hooks";

export const queryClient = new QueryClient();

export const ConfirmDialogContext = React.createContext({
  open: false,
  callback: { current: { onAccept: () => {} } },
  onClose: () => {},
  onOpen: () => {},
});

const AppProvider = () => {
  const { open, onOpenDialog, onCloseDialog } = customHooks.useDialog();
  const callbackAccept = useRef({ onAccept: () => {} });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <ConfirmDialogContext.Provider
            value={{
              open,
              callback: callbackAccept,
              onClose: onCloseDialog,
              onOpen: onOpenDialog,
            }}
          >
            <App />
            <ConfirmDialog open={open} onCloseDialog={onCloseDialog} />
          </ConfirmDialogContext.Provider>
        </SnackbarProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default AppProvider;
