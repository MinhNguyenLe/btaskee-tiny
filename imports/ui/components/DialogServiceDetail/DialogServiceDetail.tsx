import React, { useCallback } from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import customHooks from "../../hooks";
import { Service, TypeFormService } from "../../../utils/types";
import FormService from "../FormService";
import { useFormContext } from "react-hook-form";
import { preFetchDetailService } from "../../hooks/useGetServiceDetail";
import { preFetchListServices } from "../../hooks/useGetListServices";
import ServiceDetail from "../ServiceDetail";
import TabsBase, { TabPanelsBase } from "../../mui-base/Tab/TabBase";
export interface DialogServiceDetailProps
  extends Omit<UseDialogReturn, "onOpenDialog"> {
  idService: Service["_id"];
}

const DialogServiceDetail = ({
  open,
  onCloseDialog,
  idService,
}: DialogServiceDetailProps) => {
  const { value, handleChange } = customHooks.useTabs();

  const { reset, getValues } = useFormContext<TypeFormService>();

  const { isLoading: isLoadingDetailData, data: serviceDetail } =
    customHooks.useFormService({
      idService,
    });

  const { mutate: mutateUpdate, isLoading: isUpdating } =
    customHooks.useUpdateService({
      onSuccess: async () => {
        reset();
        await preFetchDetailService(idService);
        await preFetchListServices();

        onCloseDialog();
      },
    });

  const { mutate: deleteService, isLoading: isDeleting } =
    customHooks.useDeleteService({
      idService,
      onSuccess: async () => {
        onCloseDialog();
        reset();

        await preFetchListServices();
      },
    });

  const onCloseDialogServiceDetail = useCallback(() => {
    onCloseDialog();
    reset();
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
      label: "Detail",
    },
    {
      label: "Language",
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
      children: <FormService typeForm="detail" />,
    },
    {
      children: <FormService typeForm="language" />,
    },
    {
      children: <FormService typeForm="customField" />,
    },
    {
      children: <FormService typeForm="another" />,
    },
  ];

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
      onDelete={value === 0 ? deleteService : undefined}
      onSave={
        value ? () => mutateUpdate({ idService, data: getValues() }) : undefined
      }
    />
  );
};

export default DialogServiceDetail;
