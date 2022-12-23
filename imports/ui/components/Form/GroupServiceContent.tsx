import { Box, Divider } from "@mui/material";
import React from "react";
import TextFieldControl, {
  TextFieldControlProps,
} from "../../hook-form/TextFieldControl";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import TypographyBase from "../../mui-base/Typography/TypographyBase";

interface GroupServiceContent {
  name: string;
  label: string;
}

interface GroupServiceContentProps
  extends Pick<TextFieldControlProps, "control"> {
  title: string;
  groupData: GroupServiceContent[];
  addNewItem?: () => void;
}

const GroupServiceContent = ({
  title,
  groupData,
  control,
  addNewItem,
}: GroupServiceContentProps) => {
  return (
    <>
      <Divider />
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
          {Boolean(addNewItem) ? (
            <AddCircleOutlineIcon color="primary" sx={{ cursor: "pointer" }} />
          ) : null}
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default GroupServiceContent;
