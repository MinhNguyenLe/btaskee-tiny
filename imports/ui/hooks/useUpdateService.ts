import { Service, TypeFormService } from "./../utils/types";
import { useMutation } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

export interface UseUpdateServiceParams {
  idService: Service["_id"];
  data: TypeFormService;
}

const useUpdateService = (options) => {
  function mutationCallback({ idService, data }: UseUpdateServiceParams): any {
    meteorMethodCall("updateService", idService, {
      ...data,
      limitDateOfBooking: new Date(data.limitDateOfBooking).toISOString(),
    });
  }

  return useMutation(mutationCallback, options);
};

export default useUpdateService;
