import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../AppProvider";
import { Service } from "../utils/types";
import { meteorMethodCall } from "../utils/utils";

export interface UseGetServiceDetail {
  idService: string;
  onSuccess?: (data: Service) => void;
}

const keyStr = (idService: string) => `service-detail-${idService}`;

export const preFetchDetailService = (idService: string) => {
  return queryClient.prefetchQuery({
    queryKey: [keyStr(idService)],
    queryFn: () => meteorMethodCall("getServiceDetail", idService),
  });
};

const useGetServiceDetail = ({ idService, onSuccess }: UseGetServiceDetail) => {
  const callback = () => {
    meteorMethodCall("getServiceDetail", idService).then((a) => console.log(a));
  };

  return useQuery({
    queryKey: [`service-detail-${idService}`],
    queryFn: () => meteorMethodCall("getServiceDetail", idService),
    enabled: Boolean(idService),
    onSuccess,
  });
};

export default useGetServiceDetail;
