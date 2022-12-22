import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ServicesCollection } from "../../api/services";
import ServiceTable from "../components/ServiceTable";
import DialogServiceDetail from "../components/DialogServiceDetail";
import useDialog from "../hooks/useDialog";

export const ServiceManagement = () => {
  const services = useTracker(() => {
    return ServicesCollection.find(
      {},
      { fields: { _id: 1, status: 1, icon: 1, text: 1 } }
    ).fetch();
  });

  const test = useTracker(() => {
    return ServicesCollection.findOne({ _id: "4yWKhRZ73fwHCFc6m" });
  });
  const { open, onOpenDialog, onCloseDialog } = useDialog();

  console.log(test);

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
