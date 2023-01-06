import { TypeFormService } from "../../utils/types";
import { useMutation } from "@tanstack/react-query";
import { mapCustomFieldForServer, meteorMethodCall } from "../../utils/utils";

const useInsertService = (options) => {
  function mutationCallback({ customField, ...data }: TypeFormService): any {
    meteorMethodCall("services.insert", {
      customField: mapCustomFieldForServer(customField),
      ...data,
    });
  }

  return useMutation(mutationCallback, options);
};

export default useInsertService;
