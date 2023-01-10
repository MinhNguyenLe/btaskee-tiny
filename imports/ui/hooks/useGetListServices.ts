import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../AppProvider";
import { Service } from "../../utils/types";
import { meteorMethodCall } from "../../utils/utils";

export const preFetchListServices = () => {
  return queryClient.prefetchQuery({
    queryKey: ["list-services"],
    queryFn: () => meteorMethodCall("services.getAll"),
  });
};

function useGetListServices() {
  async function queryFn() {
    const data = (await meteorMethodCall(
      "services.getAll",
      false // true -> cheat to reset weight
    )) as Service[];

    console.log("LIST ----- ", data);
    if (!data) return [];

    console.log("DEBUG weight", "----------");
    data.map((item) => console.log(item.weight));
    console.log("----------");

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
