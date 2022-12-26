import { useQuery } from "@tanstack/react-query";
import { Service } from "../utils/types";
import { meteorMethodCall } from "../utils/utils";

export interface UseGetServiceDetail {
  idService: string;
  onSuccess?: (data: Service) => void;
}

const useGetServiceDetail = ({ idService, onSuccess }: UseGetServiceDetail) => {
  return useQuery({
    queryKey: [`service-detail-${idService}`],
    queryFn: () => meteorMethodCall("getServiceDetail", idService),
    enabled: Boolean(idService),
    onSuccess,
  });
};

export default useGetServiceDetail;
