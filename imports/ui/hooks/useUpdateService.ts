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
    console.log(data, "----");
    meteorMethodCall("updateService", idService, data);
  }

  return useMutation(mutationCallback, options);
};

export default useUpdateService;
