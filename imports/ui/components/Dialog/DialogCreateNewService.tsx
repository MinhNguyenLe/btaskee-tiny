import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../Form/FormService";
import { useForm, FormProvider } from "react-hook-form";

const defaultValues: FormService = {
  name: "122222",
  status: "",
  icon: "",
  onlyShowTasker: false,
  costSuggestion: 110,
};

interface DialogCreateNewServiceProps extends UseDialogReturn {}

const DialogCreateNewService = ({
  open,
  onCloseDialog,
  onOpenDialog,
}: DialogCreateNewServiceProps) => {
  const content = <FormService />;

  const methods = useForm<FormService>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <DialogBase
        open={open}
        onOpenDialog={onOpenDialog}
        onCloseDialog={onCloseDialog}
        title="Create new service"
        content={content}
      />
    </FormProvider>
  );
};

export default DialogCreateNewService;
