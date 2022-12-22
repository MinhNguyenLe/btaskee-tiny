import { Typography } from "@mui/material";
import React from "react";
import { UseDialogReturn } from "../hooks/useDialog";
import DialogBase from "../mui-base/Dialog/DialogBase";

interface DialogServiceDetailProps extends UseDialogReturn {}

const DialogServiceDetail = ({
  open,
  onCloseDialog,
  onOpenDialog,
}: DialogServiceDetailProps) => {
  const content = (
    <>
      <Typography>aaaaa</Typography>
    </>
  );

  return (
    <DialogBase
      open={open}
      onOpenDialog={onOpenDialog}
      onCloseDialog={onCloseDialog}
      title="Service's detail"
      content={content}
    />
  );
};

export default DialogServiceDetail;
