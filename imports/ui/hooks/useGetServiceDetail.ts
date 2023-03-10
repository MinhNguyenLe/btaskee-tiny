import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";
import { queryClient } from "../AppProvider";
import { Service, TypeFormService } from "../../utils/types";
import { mapCustomFieldForClient, meteorMethodCall } from "../../utils/utils";

export interface UseGetServiceDetail {
  idService: string;
  onSuccess?: (data: Service) => void;
}

const keyStr = (idService: string) => `service-detail-${idService}`;

export const preFetchDetailService = (idService: string) => {
  return queryClient.prefetchQuery({
    queryKey: [keyStr(idService)],
    queryFn: () => meteorMethodCall("services.getById", idService),
  });
};

const useGetServiceDetail = ({ idService, onSuccess }: UseGetServiceDetail) => {
  async function queryFn() {
    const data = (await meteorMethodCall(
      "services.getById",
      idService
    )) as Service[];

    if (!data) return [];

    return data;
  }

  return useQuery({
    queryKey: [`service-detail-${idService}`],
    queryFn: queryFn,
    enabled: Boolean(idService),
    onSuccess,
  });
};

export default useGetServiceDetail;
