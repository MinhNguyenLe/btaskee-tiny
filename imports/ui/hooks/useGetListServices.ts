import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../AppProvider";
import { meteorMethodCall } from "../utils/utils";

const keyStr = "list-services";

export const preFetchListServices = () => {
  return queryClient.prefetchQuery({
    queryKey: [keyStr],
    queryFn: () => meteorMethodCall("getListServicesForTable"),
  });
};

const useGetListServices = () => {
  return useQuery({
    queryKey: [keyStr],
    queryFn: () => meteorMethodCall("getListServicesForTable"),
  });
};

export default useGetListServices;
