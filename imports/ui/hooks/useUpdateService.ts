import { Service, TypeFormService } from "./../../utils/types";
import { useMutation } from "@tanstack/react-query";
import { mapCustomFieldForServer, meteorMethodCall } from "../../utils/utils";

export interface UseUpdateServiceParams {
  idService: Service["_id"];
  data: TypeFormService;
}

const useUpdateService = (options) => {
  function mutationCallback({
    idService,
    data: { customField, ...data },
  }: UseUpdateServiceParams): any {
    meteorMethodCall("services.updateById", idService, {
      customField: mapCustomFieldForServer(customField),
      ...data,
    });
  }

  const { mutate, isLoading } = useMutation(mutationCallback, options);

  return { mutate, isLoading };
};

export default useUpdateService;
