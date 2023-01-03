import React, { useState } from "react";
import ServiceTable from "../components/Table/ServiceTable";
import useDialog from "../hooks/useDialog";
import useGetListServices from "../hooks/useGetListServices";
import { Box, Button } from "@mui/material";
import DialogCreateNewService from "../components/Dialog/DialogCreateNewService";
import { Service } from "../../utils/types";
import DialogServiceDetailControl from "../hook-form/DialogServiceDetailControl";
import useDragAndDropService from "../hooks/useDragAndDropService";

//TODO: refactor re-render
export const ServiceManagement = () => {
  const { isLoading, data: services = [] } = useGetListServices();

  const [isDragAndDrop, setIsDragAndDrop] = useState<boolean>(false);

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

  const { mutate: mutateDragAndDrop, isLoading: isDraggingAndDropping } =
    useDragAndDropService();

  const onSaveNewOrder = async () => {
    await mutateDragAndDrop(
      services
        .map((item, index) => {
          return {
            idService: item._id,
            weight: item.weight,
            newWeight: index,
          };
        })
        .filter((item) => item.weight !== item.newWeight)
        .map((newOrder) => {
          return {
            idService: newOrder.idService,
            weight: newOrder.newWeight,
          };
        })
    );

    setIsDragAndDrop(false);
  };

  if (isLoading || isDraggingAndDropping) return <>Loading services... </>;

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <h1>Service Management</h1>
        {!isDragAndDrop ? (
          <Button onClick={onOpenFormCreateService} type="button">
            Create new service
          </Button>
        ) : (
          <Button onClick={onSaveNewOrder} type="button">
            Save new data's order
          </Button>
        )}
      </Box>
      <ServiceTable
        setIsDragAndDrop={setIsDragAndDrop}
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
