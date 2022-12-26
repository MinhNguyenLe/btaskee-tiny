import React from "react";
import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";

import { TypeFormService } from "../../../utils/types";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import GroupServiceContent from "./GroupServiceContent";
import CheckboxControl from "../../../hook-form/CheckboxControl";
import { isActive } from "../../../utils/utils";
import GroupDiscountByDuration from "./GroupDiscountByDuration";
import GroupDiscountByDoneTask from "./GroupDiscountByDoneTask";
import GroupCity from "./GroupCity";
import JSONDetail from "./JSONDetail";

export interface FormServiceProps {
  isLoading?: boolean;
}

const FormService = ({ isLoading }: FormServiceProps) => {
  const { control, setValue, getValues } = useFormContext<TypeFormService>();

  const triggerStatus = (isChecked: boolean) => {
    if (isChecked) setValue("status", "ACTIVE");
    else setValue("status", "INACTIVE");
  };

  if (isLoading) return <>Loading (inserting or updating data) ...</>;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextFieldControl
          control={control}
          variant="standard"
          name="costSuggestion"
          type="number"
          label="Cost suggestion"
        />
        <TextFieldControl
          control={control}
          variant="standard"
          name="defaultTaskTime"
          type="number"
          label="DefaultTask Time"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="icon"
          label="Icon"
        />
        <TextFieldControl
          // InputProps={{
          //   readOnly: true,
          // }}
          variant="standard"
          control={control}
          name="name"
          label="Service's name"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="minutesPostTaskAfterNow"
          label="Minutes post task after now"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="minAvgRating"
          label="Min avg rating"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="minTaskDone"
          label="Min task done"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="serviceFeeLeaderTasker"
          label="Servce fee leader tasker"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="limitNumberAcceptTaskInDay"
          label="Limit number accept task in day"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="maximumPSI"
          label="Maximum PSI"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="minTaskOfSubscription"
          label="Min task of subscription"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="minMoneyDeposite"
          label="Min money deposite"
          type="number"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="requireTaskerVersion"
          label="Require tasker version"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="taskServiceId"
          label="Task service id"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="requireAskerVersion"
          label="Require asker version"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="linkContentInCar"
          label="Link content in car"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="limitDateOfBooking"
          label="Limit date of booking"
        />
        <TextFieldControl
          control={control}
          variant="standard"
          name="weight"
          type="number"
          label="Weight"
        />
        <JSONDetail
          placeholder={getValues("detail")}
          onChange={(e) => {
            if (!e.error) setValue("detail", JSON.parse(e.json));
          }}
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
          label="Active"
          onChange={(e) => triggerStatus(e.target.checked)}
        />
      </Box>
      <GroupServiceContent
        control={control}
        title="Text:"
        groupData={[
          { name: "text.vi", label: "Vietnamese" },
          { name: "text.en", label: "English" },
          { name: "text.ko", label: "Korea" },
          { name: "text.th", label: "Thailand" },
        ]}
      />
      <GroupCity control={control} />
      <GroupDiscountByDuration control={control} />
      <GroupDiscountByDoneTask control={control} />
    </Box>
  );
};

export default FormService;
