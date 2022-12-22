import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UseDialogReturn } from "../../hooks/useDialog";

interface DialogBaseProps extends DialogProps, UseDialogReturn {
  title: string;
  content: JSX.Element;
}

export default function DialogBase({
  open,
  onCloseDialog,
  onOpenDialog,
  title,
  content,
  ...props
}: DialogBaseProps) {
  return (
    <Dialog
      open={open}
      onClose={onCloseDialog}
      aria-labelledby="alert-dialog-title"
      {...props}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent id="alert-dialog-description">{content}</DialogContent>
      <DialogActions>
        <Button onClick={onOpenDialog} autoFocus>
          Agree
        </Button>
        <Button onClick={onCloseDialog}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
