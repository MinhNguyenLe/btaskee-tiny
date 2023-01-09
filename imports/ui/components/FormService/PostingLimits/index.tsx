import { Box } from "@mui/material";
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
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "48ch" },
        }}
      >
        <TextFieldString
          control={control}
          name="postingLimits.from"
          label="From"
        />
        <TextFieldString control={control} name="postingLimits.to" label="To" />
      </Box>
    </GroupBg>
  );
};

export default PostingLimits;
