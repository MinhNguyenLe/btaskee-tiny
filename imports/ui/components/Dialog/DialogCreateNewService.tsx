import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import FormService from "../Form/FormService/FormService";
import { useForm, FormProvider } from "react-hook-form";
import { TypeFormService } from "../../utils/types";

const defaultValues: TypeFormService = {
  name: "",
  status: "",
  icon: "",
  onlyShowTasker: false,
  costSuggestion: 0,
  textVi: "",
  textEn: "",
  textKo: "",
  textTh: "",
  city: [
    {
      name: "",
      baseCost: 10,
      district: [
        {
          name: "1",
          time: [
            {
              date: new Date(),
              endDate: new Date(),
              endTime: 0,
              percent: 0,
              startTime: 0,
            },
          ],
        },
      ],
    },
  ],
};

interface DialogCreateNewServiceProps extends UseDialogReturn {}

const DialogCreateNewService = ({
  open,
  onCloseDialog,
  onOpenDialog,
}: DialogCreateNewServiceProps) => {
  const content = <FormService />;

  const methods = useForm<TypeFormService>({ defaultValues });

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
