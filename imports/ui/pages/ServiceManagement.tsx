import React, { useState, useContext, useEffect } from "react";
import ServiceTable from "../components/ServiceTable";
import { Box, Button } from "@mui/material";
import DialogCreateNewService from "../components/DialogCreateNewService/DialogCreateNewService";
import { Service } from "../../utils/types";
import DialogServiceDetailControl from "../hook-form/DialogServiceDetailControl";
import customHooks from "../hooks";
import { ConfirmDialogContext } from "../AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { testDispatch } from "../redux/reducer/service/reducer";

export const ServiceManagement = () => {
  const state = useSelector<any, any>((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state, ">>>>>");

    if (!state.serviceReducer.total) {
      dispatch(testDispatch(1));
    }
  }, []);
  console.log(state, "!!!s");

  const { callback, onOpen } = useContext(ConfirmDialogContext);

  const { isLoading: isLoadingListServices, data: services = [] } =
    customHooks.useGetListServices();

  const [isDragAndDrop, setIsDragAndDrop] = useState<boolean>(false);

  const [idService, setIdService] = useState<Service["_id"]>("");

  const { onOpenSnackbar } = customHooks.useSnackbar();

  const { open, onOpenDialog, onCloseDialog } = customHooks.useDialog();
  const {
    open: openFormCreateService,
    onOpenDialog: onOpenFormCreateService,
    onCloseDialog: onCloseFormCreateService,
  } = customHooks.useDialog();

  const onClickRow = (idService: string) => {
    onOpenDialog();
    setIdService(idService);
  };

  const { mutate: mutateDragAndDrop, isLoading: isDraggingAndDropping } =
    customHooks.useDragAndDropService();

  const onSaveNewOrder = async () => {
    console.log("Run callback oh ye !!1");

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

    onOpenSnackbar("Change order of services successful !", "success");

    setIsDragAndDrop(false);
  };

  if (isLoadingListServices || isDraggingAndDropping)
    return <>Loading services... </>;

  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <h1>Service Management</h1>
        {!isDragAndDrop ? (
          <Button onClick={onOpenFormCreateService} type="button">
            Create new service
          </Button>
        ) : (
          <Button
            onClick={() => {
              callback.current = { onAccept: onSaveNewOrder };
              onOpen();
            }}
            type="button"
          >
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
