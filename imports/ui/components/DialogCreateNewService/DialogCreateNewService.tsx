import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../FormService";
import { useForm, FormProvider } from "react-hook-form";
import { TypeFormService } from "../../../utils/types";
import { defaultValueServiceCollection } from "../../default-value-form";
import useInsertService from "../../hooks/useInsertService";
import { preFetchListServices } from "../../hooks/useGetListServices";
import customHooks from "../../hooks";

interface DialogCreateNewServiceProps extends UseDialogReturn {}

const DialogCreateNewService = ({
  open,
  onCloseDialog,
}: DialogCreateNewServiceProps) => {
  const methods = useForm<TypeFormService>({
    defaultValues: defaultValueServiceCollection,
  });

  const { onOpenSnackbar } = customHooks.useSnackbar();

  const { mutate: mutateInsert, isLoading: isInserting } = useInsertService({
    onSuccess: () => {
      preFetchListServices().then(() => {
        onCloseDialog();
        onOpenSnackbar("Create service successful !", "success");
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
        titleHeader="Create new service"
        content={content}
        maxWidth="lg"
        onSave={() => mutateInsert({ ...methods.getValues() })}
      />
    </FormProvider>
  );
};

export default DialogCreateNewService;
