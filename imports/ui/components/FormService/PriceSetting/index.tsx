import React from "react";
import { ControlHookForm } from "../../../../utils/types";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import TextFieldNumber from "../../base/TextFieldStandard/TextFieldNumber";
import BoxChild from "../common/BoxChild";
import GroupBg from "../common/GroupBg";
import PriceSettingFeeWeekendForCity from "./PriceSettingFeeWeekendForCity";
import PriceSettingSuperPriceTime from "./PriceSettingSuperPriceTime";

interface PriceSettingProps {
  control: ControlHookForm;
}

const PriceSetting = ({ control }: PriceSettingProps) => {
  return (
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
  );
};

export default PriceSetting;
