import { TypeFormService } from "./../utils/types";
import { useMutation } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

const useUpdateService = (options) => {
  function mutationCallback({
    idService,
    data,
  }: {
    idService: string;
    data: TypeFormService;
  }): any {
    meteorMethodCall("updateService", idService, {
      ...data,
      limitDateOfBooking: new Date(data.limitDateOfBooking).toISOString(),
    });
  }

  return useMutation(mutationCallback, options);
};

export default useUpdateService;
