import { useFormContext, UseFormReset } from "react-hook-form";
import { TypeFormService } from "../../utils/types";
import { mapCustomFieldForClient } from "../../utils/utils";
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
      console.log("DETAIL ------", data);

      setValue("costSuggestion", data.costSuggestion);
      setValue("defaultTaskTime", data.defaultTaskTime);
      setValue("icon", data.icon);
      setValue("name", data.name);
      setValue("onlyShowTasker", data.onlyShowTasker);
      setValue("status", data.status);
      setValue("text.vi", data.text.vi);
      setValue("text.en", data.text.en);
      setValue("text.ko", data.text.ko);
      setValue("text.th", data.text.th);
      setValue("discountByDuration", data.discountByDuration);
      setValue("discountByDoneTask", data.discountByDoneTask);
      setValue("minutesPostTaskAfterNow", data.minutesPostTaskAfterNow);
      setValue("minAvgRating", data.minAvgRating);
      setValue("minTaskDone", data.minTaskDone);
      setValue("serviceFeeLeaderTasker", data.serviceFeeLeaderTasker);
      setValue("isTesting", data.isTesting);
      setValue("isNewService", data.isNewService);
      setValue("requireTaskerVersion", data.requireTaskerVersion);
      setValue("limitDateOfBooking", data.limitDateOfBooking);
      setValue("limitNumberAcceptTaskInDay", data.limitNumberAcceptTaskInDay);
      setValue("isSubscription", data.isSubscription);
      setValue("taskServiceId", data.taskServiceId);
      setValue("maximumPSI", data.maximumPSI);
      setValue("minTaskOfSubscription", data.minTaskOfSubscription);
      setValue("requireAskerVersion", data.requireAskerVersion);
      setValue("isOpenGoMarketDefault", data.isOpenGoMarketDefault);
      setValue("linkContentInCar", data.linkContentInCar);
      setValue("minMoneyDeposite", data.minMoneyDeposite);
      setValue("detail", data.detail);
      setValue("city", data.city);
      setValue("pauseSetting", data.pauseSetting);
      setValue("postingLimits", data.postingLimits);
      setValue("priceSetting", data.priceSetting);
      setValue("shortText", data.shortText);
      setValue("tip", data.tip);
      setValue("customField", mapCustomFieldForClient(data.customField));
    },
  });

  return { isLoading, reset };
}

export default useFormService;
