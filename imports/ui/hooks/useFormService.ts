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
      if (data.minutesPostTaskAfterNow)
        setValue("minutesPostTaskAfterNow", data.minutesPostTaskAfterNow);
      if (data.minAvgRating) setValue("minAvgRating", data.minAvgRating);
      if (data.minTaskDone) setValue("minTaskDone", data.minTaskDone);
      if (data.serviceFeeLeaderTasker)
        setValue("serviceFeeLeaderTasker", data.serviceFeeLeaderTasker);
      if (data.isTesting) setValue("isTesting", data.isTesting);
      if (data.isNewService) setValue("isNewService", data.isNewService);
      if (data.requireTaskerVersion)
        setValue("requireTaskerVersion", data.requireTaskerVersion);
      if (data.limitDateOfBooking)
        setValue("limitDateOfBooking", data.limitDateOfBooking);
      if (data.limitNumberAcceptTaskInDay)
        setValue("limitNumberAcceptTaskInDay", data.limitNumberAcceptTaskInDay);
      if (data.isSubscription) setValue("isSubscription", data.isSubscription);
      if (data.taskServiceId) setValue("taskServiceId", data.taskServiceId);
      if (data.maximumPSI) setValue("maximumPSI", data.maximumPSI);
      if (data.minTaskOfSubscription)
        setValue("minTaskOfSubscription", data.minTaskOfSubscription);
      if (data.requireAskerVersion)
        setValue("requireAskerVersion", data.requireAskerVersion);
      if (data.isOpenGoMarketDefault)
        setValue("isOpenGoMarketDefault", data.isOpenGoMarketDefault);
      if (data.linkContentInCar)
        setValue("linkContentInCar", data.linkContentInCar);
      if (data.minMoneyDeposite)
        setValue("minMoneyDeposite", data.minMoneyDeposite);
      if (data.weight) setValue("weight", data.weight);
      if (data.detail) setValue("detail", data.detail);
      if (data.city) setValue("city", data.city);

      const test =
        data.city[0]?.district && data.city[0]?.district[0]?.time[0]?.date;
      console.log(test, typeof test);
    },
  });

  return { isLoading, reset };
}

export default useFormService;
