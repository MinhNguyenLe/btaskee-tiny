import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../Form/FormService/FormService";
import { useForm, FormProvider } from "react-hook-form";
import { TypeFormService } from "../../utils/types";
import { defaultValueServiceCollection } from "../../default-value-form";

interface DialogCreateNewServiceProps extends UseDialogReturn {}

const DialogCreateNewService = ({
  open,
  onCloseDialog,
  onOpenDialog,
}: DialogCreateNewServiceProps) => {
  const content = <FormService />;

  const methods = useForm<TypeFormService>({
    defaultValues: defaultValueServiceCollection,
  });

  return (
    <FormProvider {...methods}>
      <DialogBase
        open={open}
        onOpenDialog={onOpenDialog}
        onCloseDialog={onCloseDialog}
        title="Create new service"
        content={content}
        maxWidth="md"
      />
    </FormProvider>
  );
};

export default DialogCreateNewService;
