import { useQuery } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

const useGetListServices = () => {
  return useQuery({
    queryKey: ["list-services"],
    queryFn: () => meteorMethodCall("getListServicesForTable"),
  });
};

export default useGetListServices;
