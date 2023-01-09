import React from "react";
import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";

import { TypeFormService } from "../../../utils/types";
import GroupLang from "./GroupLang";
import CheckboxControl from "../../hook-form/CheckboxControl";
import { isActive } from "../../../utils/utils";
import GroupDiscountByDuration from "./GroupDiscountByDuration";
import GroupDiscountByDoneTask from "./GroupDiscountByDoneTask";
import GroupCity from "./GroupCity";
import JSONDetail from "./JSONDetail";
import GroupBg from "./GroupBg";
import PauseSetting from "./PauseSetting";
import TypographyBase from "../../mui-base/Typography/TypographyBase";
import BoxChild from "./BoxChild";
import PriceSettingFeeWeekendForCity from "./PriceSettingFeeWeekendForCity";
import PriceSettingSuperPriceTime from "./PriceSettingSuperPriceTime";
import TipRequirement from "./TipRequirement";
import TextFieldNumber from "../base/TextFieldStandard/TextFieldNumber";
import TextFieldString from "../base/TextFieldStandard/TextFieldString";
import DatePickerControl from "../../hook-form/DatePickerControl";
import JSONEditorControl from "../../hook-form/JSONEditorControl";
import CustomDataService from "./CustomDataService";

export interface FormServiceProps {
  isLoading?: boolean;
}

const FormService = ({ isLoading }: FormServiceProps) => {
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
          // InputProps={{
          //   readOnly: true,
          // }}
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
        <CheckboxControl control={control} name="isTesting" label="Testing " />
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
      <GroupBg>
        <TypographyBase title="Detail" color="primary"></TypographyBase>
        <JSONEditorControl height="200px" control={control} name="detail" />
      </GroupBg>
      <CustomDataService control={control} />
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
      <GroupCity control={control} />
      <GroupDiscountByDuration control={control} />
      <GroupDiscountByDoneTask control={control} />
      <PauseSetting control={control} />
      <GroupBg>
        <TypographyBase title="Posting limits" color="primary"></TypographyBase>
        <TextFieldString
          control={control}
          name="postingLimits.from"
          label="From"
        />
        <TextFieldString control={control} name="postingLimits.to" label="To" />
      </GroupBg>
      <GroupBg>
        <TypographyBase title="Price setting" color="primary"></TypographyBase>
        <BoxChild>
          <TextFieldNumber
            control={control}
            name="priceSetting.costForChooseTasker"
            label="Cost for choose tasker"
          />
          <TextFieldNumber
            control={control}
            name="priceSetting.emergencyTaskWithin"
            label="Emergency task within"
          />
          <TextFieldNumber
            control={control}
            name="priceSetting.feeForEmergencyTask"
            label="Fee for emergency task"
          />
          <TextFieldNumber
            control={control}
            name="priceSetting.feeForWeekend"
            label="Fee for weekend"
          />
          <PriceSettingFeeWeekendForCity control={control} />
          <PriceSettingSuperPriceTime control={control} />
        </BoxChild>
      </GroupBg>
      <GroupBg>
        <TypographyBase title="Tip" color="primary"></TypographyBase>
        <TipRequirement control={control} />
      </GroupBg>
    </Box>
  );
};

export default FormService;
