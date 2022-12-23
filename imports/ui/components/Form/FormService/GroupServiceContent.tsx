import { Box, Divider } from "@mui/material";
import React from "react";
import TextFieldControl from "../../../hook-form/TextFieldControl";

import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../utils/types";

interface GroupServiceContent {
  name: string;
  label: string;
}

interface GroupServiceContentProps {
  title: string;
  groupData: GroupServiceContent[];
  control: ControlHookForm;
}

const GroupServiceContent = ({
  title,
  groupData,
  control,
}: GroupServiceContentProps) => {
  return (
    <>
      <Box sx={{ margin: "16px 0 16px 0" }}>
        <TypographyBase title={title} color="primary"></TypographyBase>
        <Box display="flex" alignItems="center">
          {groupData.map(({ name, label }, index) => {
            return (
              <TextFieldControl
                key={`${index}_${name}`}
                control={control}
                name={name}
                label={label}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default GroupServiceContent;
