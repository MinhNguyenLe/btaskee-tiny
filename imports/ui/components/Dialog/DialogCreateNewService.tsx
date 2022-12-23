import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../Form/FormService";

interface DialogCreateNewServiceProps extends UseDialogReturn {}

const DialogCreateNewService = ({
  open,
  onCloseDialog,
  onOpenDialog,
}: DialogCreateNewServiceProps) => {
  const content = <FormService />;

  return (
    <DialogBase
      open={open}
      onOpenDialog={onOpenDialog}
      onCloseDialog={onCloseDialog}
      title="Create new service"
      content={content}
    />
  );
};

export default DialogCreateNewService;
