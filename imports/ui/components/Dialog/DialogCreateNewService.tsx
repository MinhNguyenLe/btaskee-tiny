import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../Form/FormService/FormService";
import { useForm, FormProvider } from "react-hook-form";
import { TypeFormService } from "../../utils/types";
import { defaultValueServiceCollection } from "../../default-value-form";
import useInsertService from "../../hooks/userInsertService";

interface DialogCreateNewServiceProps extends UseDialogReturn {}

const DialogCreateNewService = ({
  open,
  onCloseDialog,
}: DialogCreateNewServiceProps) => {
  const methods = useForm<TypeFormService>({
    defaultValues: defaultValueServiceCollection,
  });

  const { mutate: mutateInsert, isLoading: isInserting } = useInsertService({
    onSuccess: () => {
      onCloseDialog();
      methods.reset();
    },
  });

  const content = <FormService isLoading={isInserting} />;

  return (
    <FormProvider {...methods}>
      <DialogBase
        open={open}
        onCloseDialog={onCloseDialog}
        title="Create new service"
        content={content}
        maxWidth="md"
        onSave={() => mutateInsert(methods.getValues())}
      />
    </FormProvider>
  );
};

export default DialogCreateNewService;
