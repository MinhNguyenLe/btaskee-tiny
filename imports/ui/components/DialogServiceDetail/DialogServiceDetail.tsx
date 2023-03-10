import React, { useCallback, useContext } from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import Box from "@mui/material/Box";
import customHooks from "../../hooks";
import { Service, TypeFormService } from "../../../utils/types";
import FormService from "../FormService";
import { useFormContext } from "react-hook-form";
import { preFetchDetailService } from "../../hooks/useGetServiceDetail";
import { preFetchListServices } from "../../hooks/useGetListServices";
import ServiceDetail from "../ServiceDetail";
import TabsBase, { TabPanelsBase } from "../../mui-base/Tab/TabBase";
import { ConfirmDialogContext } from "../../AppProvider";
export interface DialogServiceDetailProps
  extends Omit<UseDialogReturn, "onOpenDialog"> {
  idService: Service["_id"];
}

const DialogServiceDetail = ({
  open,
  onCloseDialog,
  idService,
}: DialogServiceDetailProps) => {
  const { callback, onOpen } = useContext(ConfirmDialogContext);

  const { value, handleChange, resetTab } = customHooks.useTabs();

  const { onOpenSnackbar } = customHooks.useSnackbar();

  const { reset, getValues } = useFormContext<TypeFormService>();

  const { isLoading: isLoadingDetailData, data: serviceDetail } =
    customHooks.useFormService({
      idService,
    });

  const { mutate: mutateUpdate, isLoading: isUpdating } =
    customHooks.useUpdateService({
      onSuccess: async () => {
        onCloseDialog();
        onOpenSnackbar("Update service successful !", "success");
        await preFetchDetailService(idService);
        await preFetchListServices();
        resetTab();
      },
    });

  const { mutate: deleteService, isLoading: isDeleting } =
    customHooks.useDeleteService({
      idService,
      onSuccess: async () => {
        onCloseDialog();
        onOpenSnackbar("Delete service successful !", "success");
        await preFetchListServices();
        reset();
        resetTab();
      },
    });

  const onCloseDialogServiceDetail = useCallback(() => {
    onCloseDialog();
    resetTab();
  }, []);

  const listTabs = [
    {
      label: "Information",
    },
    {
      label: "Basic",
    },
    {
      label: "City",
    },
    {
      label: "Custom field",
    },
    {
      label: "Another",
    },
  ];

  const listTabPanels = [
    {
      children: <ServiceDetail serviceDetail={serviceDetail} />,
    },
    {
      children: <FormService typeForm="basic" />,
    },
    {
      children: <FormService typeForm="city" />,
    },

    {
      children: <FormService typeForm="customField" />,
    },
    {
      children: <FormService typeForm="another" />,
    },
  ];

  const onSave = !value
    ? undefined
    : () => {
        callback.current = {
          onAccept: () => mutateUpdate({ idService, data: getValues() }),
        };
        onOpen();
      };

  const onDelete =
    value !== 0
      ? undefined
      : () => {
          callback.current = {
            onAccept: deleteService,
          };
          onOpen();
        };

  return (
    <DialogBase
      open={open}
      onCloseDialog={onCloseDialogServiceDetail}
      titleHeader={
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabsBase
            value={value}
            handleChange={handleChange}
            aria-label="basic tabs example"
            listTabs={listTabs}
          ></TabsBase>
        </Box>
      }
      content={
        isLoadingDetailData || isUpdating || isDeleting ? (
          <span>Loading ...</span>
        ) : (
          <Box sx={{ width: "100%" }}>
            <TabPanelsBase listTabPanels={listTabPanels} value={value} />
          </Box>
        )
      }
      maxWidth="lg"
      fullWidth
      onDelete={onDelete}
      onSave={onSave}
    />
  );
};

export default DialogServiceDetail;
