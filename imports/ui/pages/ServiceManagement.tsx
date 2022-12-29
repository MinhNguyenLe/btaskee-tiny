import React, { useState } from "react";
import ServiceTable from "../components/Table/ServiceTable";
import useDialog from "../hooks/useDialog";
import useGetListServices from "../hooks/useGetListServices";
import useGetServiceDetail from "../hooks/useGetServiceDetail";
import { Box, Button } from "@mui/material";
import DialogCreateNewService from "../components/Dialog/DialogCreateNewService";
import { Service } from "../utils/types";
import DialogServiceDetailControl from "../hook-form/DialogServiceDetailControl";

//TODO: refactor re-render
export const ServiceManagement = () => {
  const { isLoading, data: services } = useGetListServices();

  const [idService, setIdService] = useState<Service["_id"]>("");

  const { open, onOpenDialog, onCloseDialog } = useDialog();
  const {
    open: openFormCreateService,
    onOpenDialog: onOpenFormCreateService,
    onCloseDialog: onCloseFormCreateService,
  } = useDialog();

  const onClickRow = (idService: string) => {
    onOpenDialog();
    setIdService(idService);
  };

  if (isLoading) return <>Loading services... </>;

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <h1>Service Management</h1>
        <Button onClick={onOpenFormCreateService} type="button">
          Create new service
        </Button>
      </Box>
      <ServiceTable
        onClickRow={(idService) => onClickRow(idService)}
        rows={services}
        headers={["Drag and drop", "Title", "Status", "Icon"]}
      />
      <DialogServiceDetailControl
        open={open}
        onOpenDialog={onOpenDialog}
        onCloseDialog={onCloseDialog}
        idService={idService}
      />
      <DialogCreateNewService
        open={openFormCreateService}
        onOpenDialog={onOpenFormCreateService}
        onCloseDialog={onCloseFormCreateService}
      />
    </>
  );
};
