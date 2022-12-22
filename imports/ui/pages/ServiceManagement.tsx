import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ServicesCollection } from "../../api/services";
import ServiceTable from "../components/ServiceTable";

export const ServiceManagement = () => {
  const services = useTracker(() => {
    return ServicesCollection.find().fetch();
  });

  console.log(services);

  const headers = ["Title", "Status", "Icon"];

  return <ServiceTable rows={services} headers={headers} />;
};
