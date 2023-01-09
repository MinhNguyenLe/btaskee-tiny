import React from "react";
import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";

import { TypeFormService } from "../../../utils/types";
import GroupLang from "./GroupLang";
import CheckboxControl from "../../hook-form/CheckboxControl";
import { isActive } from "../../../utils/utils";
import GroupDiscountByDuration from "./GroupDiscountByDuration";
import GroupDiscountByDoneTask from "./GroupDiscountByDoneTask";
import City from "./City";
import GroupBg from "./common/GroupBg";
import PauseSetting from "./PauseSetting";
import TypographyBase from "../../mui-base/Typography/TypographyBase";
import TextFieldNumber from "../base/TextFieldStandard/TextFieldNumber";
import TextFieldString from "../base/TextFieldStandard/TextFieldString";
import DatePickerControl from "../../hook-form/DatePickerControl";
import JSONEditorControl from "../../hook-form/JSONEditorControl";
import CustomDataService from "./CustomDataService";
import PriceSetting from "./PriceSetting";
import Tip from "./Tip";
import PostingLimits from "./PostingLimits";

export interface FormServiceProps {
  isLoading?: boolean;
  typeForm?:
    | "basic"
    | "city"
    | "customField"
    | "detail"
    | "language"
    | "another";
}

const FormService = ({ isLoading, typeForm = "basic" }: FormServiceProps) => {
  const { control, setValue } = useFormContext<TypeFormService>();

  const triggerStatus = (isChecked: boolean) => {
    if (isChecked) setValue("status", "ACTIVE");
    else setValue("status", "INACTIVE");
  };

  if (isLoading) return <>Loading (inserting or updating data) ...</>;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "24ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {typeForm === "basic" ? (
        <>
          <Box>
            <DatePickerControl
              control={control}
              name="limitDateOfBooking"
              label="Limit date of booking"
            />
            <TextFieldNumber
              control={control}
              name="costSuggestion"
              label="Cost suggestion"
            />
            <TextFieldNumber
              control={control}
              name="defaultTaskTime"
              label="DefaultTask Time"
            />
            <TextFieldString control={control} name="icon" label="Icon" />
            <TextFieldString
              control={control}
              name="name"
              label="Service's name"
            />
            <TextFieldNumber
              control={control}
              name="minutesPostTaskAfterNow"
              label="Minutes post task after now"
            />
            <TextFieldNumber
              control={control}
              name="minAvgRating"
              label="Min avg rating"
            />
            <TextFieldNumber
              control={control}
              name="minTaskDone"
              label="Min task done"
            />
            <TextFieldNumber
              control={control}
              name="serviceFeeLeaderTasker"
              label="Servce fee leader tasker"
            />
            <TextFieldNumber
              control={control}
              name="limitNumberAcceptTaskInDay"
              label="Limit number accept task in day"
            />
            <TextFieldNumber
              control={control}
              name="maximumPSI"
              label="Maximum PSI"
            />
            <TextFieldNumber
              control={control}
              name="minTaskOfSubscription"
              label="Min task of subscription"
            />
            <TextFieldNumber
              control={control}
              name="minMoneyDeposite"
              label="Min money deposite"
            />
            <TextFieldString
              control={control}
              name="requireTaskerVersion"
              label="Require tasker version"
            />
            <TextFieldString
              control={control}
              name="taskServiceId"
              label="Task service id"
            />
            <TextFieldString
              control={control}
              name="requireAskerVersion"
              label="Require asker version"
            />
            <TextFieldString
              control={control}
              name="linkContentInCar"
              label="Link content in car"
            />
          </Box>
          <Box>
            <CheckboxControl
              control={control}
              name="onlyShowTasker"
              label="Only show tasker"
            />
            <CheckboxControl
              control={control}
              name="isTesting"
              label="Testing "
            />
            <CheckboxControl
              control={control}
              name="isNewService"
              label="New service"
            />
            <CheckboxControl
              control={control}
              name="isSubscription"
              label="Subscription"
            />
            <CheckboxControl
              control={control}
              name="isOpenGoMarketDefault"
              label="Open go market default"
            />
            <CheckboxControl
              logicChecked={isActive}
              control={control}
              name="status"
              label="Status"
              onChange={(e) => triggerStatus(e.target.checked)}
            />
          </Box>
        </>
      ) : null}
      {typeForm === "detail" ? (
        <GroupBg>
          <TypographyBase title="Detail" color="primary"></TypographyBase>
          <JSONEditorControl height="200px" control={control} name="detail" />
        </GroupBg>
      ) : null}
      {typeForm === "customField" ? (
        <CustomDataService control={control} />
      ) : null}
      {typeForm === "language" ? (
        <>
          <GroupBg>
            <GroupLang control={control} title="Text:" namePrefix="text" />
          </GroupBg>
          <GroupBg>
            <GroupLang
              control={control}
              title="short text:"
              namePrefix="shortText"
            />
          </GroupBg>
        </>
      ) : null}
      {typeForm === "city" ? <City control={control} /> : null}
      {typeForm === "another" ? (
        <>
          <GroupDiscountByDuration control={control} />
          <GroupDiscountByDoneTask control={control} />
          <PauseSetting control={control} />
          <PostingLimits control={control} />
          <PriceSetting control={control} />
          <Tip control={control} />
        </>
      ) : null}
    </Box>
  );
};

export default FormService;
