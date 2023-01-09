import { Box } from "@mui/material";
import React from "react";
import { Service } from "../../../utils/types";
import JSONContent from "./JSONContent";
import BasicContent from "./BasicContent";

interface ServiceDetailProps {
  serviceDetail?: Service;
}

const ServiceDetail = ({ serviceDetail }: ServiceDetailProps) => {
  if (!serviceDetail) return <></>;

  return (
    <Box>
      <BasicContent boldText="Name" regularText={serviceDetail.name} />
      <BasicContent
        boldText="Cose Suggestion"
        regularText={serviceDetail.costSuggestion}
      />
      <BasicContent
        boldText="Limit date of booking"
        regularText={serviceDetail.limitDateOfBooking}
      />
      <BasicContent
        boldText="DefaultTask Time"
        regularText={serviceDetail.defaultTaskTime}
      />
      <BasicContent
        boldText="Minutes post task after now"
        regularText={serviceDetail.minutesPostTaskAfterNow}
      />
      <BasicContent
        boldText="Min avg rating"
        regularText={serviceDetail.minAvgRating}
      />
      <BasicContent
        boldText="Min task done"
        regularText={serviceDetail.minTaskDone}
      />
      <BasicContent
        boldText="Servce fee leader tasker"
        regularText={serviceDetail.serviceFeeLeaderTasker}
      />
      <BasicContent
        boldText="Limit number accept task in day"
        regularText={serviceDetail.limitNumberAcceptTaskInDay}
      />
      <BasicContent
        boldText="Maximum PSI"
        regularText={serviceDetail.maximumPSI}
      />
      <BasicContent
        boldText="Min task of subscription"
        regularText={serviceDetail.minTaskOfSubscription}
      />
      <BasicContent
        boldText="Min money deposite"
        regularText={serviceDetail.minMoneyDeposite}
      />
      <BasicContent
        boldText="Require tasker version"
        regularText={serviceDetail.requireTaskerVersion}
      />
      <BasicContent
        boldText="Task service id"
        regularText={serviceDetail.taskServiceId}
      />
      <BasicContent
        boldText="Require asker version"
        regularText={serviceDetail.requireAskerVersion}
      />
      <BasicContent
        boldText="Link content in car"
        regularText={serviceDetail.linkContentInCar}
      />
      <BasicContent
        boldText="Only show tasker"
        regularText={serviceDetail.onlyShowTasker}
      />
      <BasicContent
        boldText="New service"
        regularText={serviceDetail.isNewService}
      />
      <BasicContent
        boldText="Subscription"
        regularText={serviceDetail.isSubscription}
      />
      <BasicContent
        boldText="Open go market default"
        regularText={serviceDetail.isOpenGoMarketDefault}
      />
      <BasicContent boldText="Status" regularText={serviceDetail.status} />
      <JSONContent
        boldText="Custom field"
        regularText={JSON.stringify(serviceDetail?.customField, null, 2)}
      />
      <JSONContent
        boldText="City"
        regularText={JSON.stringify(serviceDetail?.city, null, 2)}
      />
      <JSONContent
        boldText="Discount By Done Task"
        regularText={JSON.stringify(serviceDetail?.discountByDoneTask, null, 2)}
      />
      <JSONContent
        boldText="Discount By Duration"
        regularText={JSON.stringify(serviceDetail?.discountByDuration, null, 2)}
      />
      <JSONContent
        boldText="Text"
        regularText={JSON.stringify(serviceDetail?.text, null, 2)}
      />
      <JSONContent
        boldText="Short Text"
        regularText={JSON.stringify(serviceDetail?.shortText, null, 2)}
      />
      <JSONContent
        boldText="Tip"
        regularText={JSON.stringify(serviceDetail?.tip, null, 2)}
      />
      <JSONContent
        boldText="Pause Setting"
        regularText={JSON.stringify(serviceDetail?.pauseSetting, null, 2)}
      />
      <JSONContent
        boldText="Price Setting"
        regularText={JSON.stringify(serviceDetail?.priceSetting, null, 2)}
      />
      <JSONContent
        boldText="Posting Limits"
        regularText={JSON.stringify(serviceDetail?.postingLimits, null, 2)}
      />
    </Box>
  );
};

export default ServiceDetail;
