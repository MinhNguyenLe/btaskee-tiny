import { TypeFormService } from "./../utils/types";
import { useMutation } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

const useInsertService = (options) => {
  function mutationCallback(data: TypeFormService): any {
    meteorMethodCall("insertNewService", {
      ...data,
      limitDateOfBooking: new Date(data.limitDateOfBooking).toISOString(),
    });
  }

  return useMutation(mutationCallback, options);
};

export default useInsertService;
