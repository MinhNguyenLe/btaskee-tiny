import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../AppProvider";
import { Service } from "../utils/types";
import { meteorMethodCall } from "../utils/utils";

export const preFetchListServices = () => {
  return queryClient.prefetchQuery({
    queryKey: ["list-services"],
    queryFn: () => meteorMethodCall("getListServicesForTable"),
  });
};

function useGetListServices() {
  async function queryFn() {
    const data = (await meteorMethodCall(
      "getListServicesForTable",
      false // true -> cheat to reset weight
    )) as Service[];

    if (!data) return [];

    console.log("LIST_DATA ----------- ", data);

    return [...data].sort((a, b) => {
      return a.weight - b.weight;
    });
  }

  return useQuery({
    queryKey: ["list-services"],
    queryFn: queryFn,
  });
}

export default useGetListServices;
