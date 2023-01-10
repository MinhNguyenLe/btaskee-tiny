import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UseDialogReturn } from "../../../../hooks/useDialog";
import { ConfirmDialogContext } from "../../../../AppProvider";

interface ConfirmDialogProps
  extends DialogProps,
    Omit<UseDialogReturn, "onOpenDialog"> {}

const ConfirmDialog = ({
  open,
  onCloseDialog,
  ...props
}: ConfirmDialogProps) => {
  const { callback } = useContext(ConfirmDialogContext);

  return (
    <Dialog
      open={open}
      onClose={onCloseDialog}
      aria-labelledby="confirm-dialog-title"
      maxWidth="sm"
      fullWidth
      {...props}
    >
      <DialogTitle id="confirm-dialog-title">Confirm</DialogTitle>
      <DialogContent>Are you sure ?</DialogContent>
      <DialogActions>
        <Button
          color="success"
          onClick={() => {
            callback.current.onAccept?.();

            onCloseDialog();
          }}
          autoFocus
        >
          Accept
        </Button>
        <Button onClick={onCloseDialog} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
