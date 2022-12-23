import { useQuery } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

const useGetServiceDetail = (idService: string) => {
  return useQuery({
    queryKey: [`service-detail-${idService}`],
    queryFn: () => meteorMethodCall("getServiceDetail", idService),
    enabled: Boolean(idService),
  });
};

export default useGetServiceDetail;
