import { useMutation } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

export interface MutationCallbackProps {
  idService1: string;
  idService2: string;
}

const useDragAndDropService = () => {
  function mutationCallback({
    idService1,
    idService2,
  }: MutationCallbackProps): any {
    meteorMethodCall("updateAfterDragAndDropRecord", {
      idService1,
      idService2,
    });
  }

  return useMutation(mutationCallback);
};

export default useDragAndDropService;

/**
 * order:
 *
 */
