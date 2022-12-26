import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import DialogServiceDetail, {
  DialogServiceDetailProps,
} from "../components/Dialog/DialogServiceDetail";
import { defaultValueServiceCollection } from "../default-value-form";
import { TypeFormService } from "../utils/types";

const DialogServiceDetailControl = (props: DialogServiceDetailProps) => {
  const methods = useForm<TypeFormService>({
    defaultValues: defaultValueServiceCollection,
  });

  return (
    <FormProvider {...methods}>
      <DialogServiceDetail {...props} />
    </FormProvider>
  );
};

export default DialogServiceDetailControl;
