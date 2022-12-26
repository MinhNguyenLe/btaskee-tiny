import React from "react";
import TextFieldControl from "../../../hook-form/TextFieldControl";

import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../utils/types";
import BoxCenter from "../../Grid/BoxCenter";
import GroupBg from "./GroupBg";

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
    <GroupBg>
      <TypographyBase title={title} color="primary"></TypographyBase>
      <BoxCenter>
        {groupData.map(({ name, label }, index) => {
          return (
            <TextFieldControl
              variant="standard"
              key={`${index}_${name}`}
              control={control}
              name={name}
              label={label}
            />
          );
        })}
      </BoxCenter>
    </GroupBg>
  );
};

export default GroupServiceContent;
