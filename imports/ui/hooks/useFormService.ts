import { useFormContext, UseFormReset } from "react-hook-form";
import { TypeFormService } from "../utils/types";
import useGetServiceDetail, {
  UseGetServiceDetail,
} from "./useGetServiceDetail";

interface UseFormServiceReturn {
  isLoading: boolean;
  reset: UseFormReset<TypeFormService>;
}

interface UseFormServiceParams {
  idService: UseGetServiceDetail["idService"];
}

function useFormService({
  idService,
}: UseFormServiceParams): UseFormServiceReturn {
  const { setValue, reset } = useFormContext<TypeFormService>();

  const { isLoading } = useGetServiceDetail({
    idService,
    onSuccess: (data) => {
      if (data.costSuggestion) setValue("costSuggestion", data.costSuggestion);
      if (data.defaultTaskTime)
        setValue("defaultTaskTime", data.defaultTaskTime);
      if (data.icon) setValue("icon", data.icon);
      if (data.name) setValue("name", data.name);
      if (data.onlyShowTasker) setValue("onlyShowTasker", data.onlyShowTasker);
      if (data.status) setValue("status", data.status);
      if (data.text.vi) setValue("text.vi", data.text.vi);
      if (data.text.en) setValue("text.en", data.text.en);
      if (data.text.ko) setValue("text.ko", data.text.ko);
      if (data.text.th) setValue("text.th", data.text.th);
      if (data.discountByDuration)
        setValue("discountByDuration", data.discountByDuration);
      if (data.discountByDoneTask)
        setValue("discountByDoneTask", data.discountByDoneTask);
    },
  });

  return { isLoading, reset };
}

export default useFormService;
