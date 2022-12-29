import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../Form/FormService/FormService";
import { useForm, FormProvider } from "react-hook-form";
import { TypeFormService } from "../../utils/types";
import { defaultValueServiceCollection } from "../../default-value-form";
import useInsertService from "../../hooks/userInsertService";
import { preFetchListServices } from "../../hooks/useGetListServices";

interface DialogCreateNewServiceProps extends UseDialogReturn {
  weight: number;
}

const DialogCreateNewService = ({
  open,
  weight,
  onCloseDialog,
}: DialogCreateNewServiceProps) => {
  const methods = useForm<TypeFormService>({
    defaultValues: defaultValueServiceCollection,
  });

  const { mutate: mutateInsert, isLoading: isInserting } = useInsertService({
    onSuccess: () => {
      preFetchListServices().then(() => {
        onCloseDialog();
        methods.reset();
      });
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
        maxWidth="lg"
        onSave={() => mutateInsert({ ...methods.getValues(), weight })}
      />
    </FormProvider>
  );
};

export default DialogCreateNewService;
