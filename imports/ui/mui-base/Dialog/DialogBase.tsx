import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { UseDialogReturn } from "../../hooks/useDialog";

interface DialogBaseProps
  extends DialogProps,
    Omit<UseDialogReturn, "onOpenDialog"> {
  titleHeader: JSX.Element | string;
  content: JSX.Element;
  onSave?: () => void;
  onDelete?: () => void;
}

export default function DialogBase({
  open,
  onCloseDialog,
  titleHeader,
  content,
  onSave,
  onDelete,
  ...props
}: DialogBaseProps) {
  return (
    <Dialog
      open={open}
      onClose={onCloseDialog}
      aria-labelledby="dialog-title"
      {...props}
    >
      <DialogTitle id="dialog-title">{titleHeader}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onSave} autoFocus>
          Save
        </Button>
        {onDelete ? (
          <Button onClick={onDelete} autoFocus>
            Delete
          </Button>
        ) : null}
        <Button onClick={onCloseDialog}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
