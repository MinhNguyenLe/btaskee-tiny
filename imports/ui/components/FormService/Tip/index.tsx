import React from "react";
import { ControlHookForm } from "../../../../utils/types";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import GroupBg from "../common/GroupBg";
import TipRequirement from "./TipRequirement";

interface TipProps {
  control: ControlHookForm;
}

const Tip = ({ control }: TipProps) => {
  return (
    <GroupBg>
      <TypographyBase title="Tip" color="primary"></TypographyBase>
      <TipRequirement control={control} />
    </GroupBg>
  );
};

export default Tip;
