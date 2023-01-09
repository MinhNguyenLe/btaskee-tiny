import React from "react";
import { ControlHookForm } from "../../../../utils/types";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import TextFieldString from "../../base/TextFieldStandard/TextFieldString";
import GroupBg from "../common/GroupBg";

interface PostingLimitsProps {
  control: ControlHookForm;
}

const PostingLimits = ({ control }: PostingLimitsProps) => {
  return (
    <GroupBg>
      <TypographyBase title="Posting limits" color="primary"></TypographyBase>
      <TextFieldString
        control={control}
        name="postingLimits.from"
        label="From"
      />
      <TextFieldString control={control} name="postingLimits.to" label="To" />
    </GroupBg>
  );
};

export default PostingLimits;
