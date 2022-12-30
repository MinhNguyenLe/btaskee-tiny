import { useMutation } from "@tanstack/react-query";
import { meteorMethodCall } from "../utils/utils";

export interface OrderService {
  idService: string;
  weight: number;
}

const useDragAndDropService = () => {
  async function mutationCallback(listNewOrders: OrderService[]) {
    return meteorMethodCall("updateAfterDragAndDropRecord", listNewOrders);
  }

  return useMutation(mutationCallback);
};

export default useDragAndDropService;
