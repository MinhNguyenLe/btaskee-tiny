import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ServicesCollection } from "../../api/services";
import ServiceTable from "../components/ServiceTable";
import DialogServiceDetail from "../components/DialogServiceDetail";
import useDialog from "../hooks/useDialog";

export const ServiceManagement = () => {
  const services = useTracker(() => {
    return ServicesCollection.find().fetch();
  });
  const { open, onOpenDialog, onCloseDialog } = useDialog();

  console.log(services);

  const headers = ["Title", "Status", "Icon"];

  return (
    <>
      <h1>Service Management</h1>
      <ServiceTable
        onClickRow={onOpenDialog}
        rows={services}
        headers={headers}
      />
      <DialogServiceDetail
        open={open}
        onOpenDialog={onOpenDialog}
        onCloseDialog={onCloseDialog}
      />
    </>
  );
};
