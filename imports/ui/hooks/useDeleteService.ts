import { useMutation } from "@tanstack/react-query";
import { meteorMethodCall } from "../../utils/utils";

const useDeleteService = ({
  idService,
  onSuccess,
}: {
  idService: string;
  onSuccess: () => void;
}) => {
  function mutationCallback(): any {
    meteorMethodCall("services.deleteById", idService);
  }

  return useMutation(mutationCallback, { onSuccess });
};

export default useDeleteService;
