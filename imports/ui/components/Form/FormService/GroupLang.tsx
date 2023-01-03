import React from "react";
import TextFieldControl from "../../../hook-form/TextFieldControl";

import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../../utils/types";
import BoxCenter from "../../Grid/BoxCenter";

interface GroupLangProps {
  title: string;
  control: ControlHookForm;
  namePrefix: string;
}

const GroupLang = ({ namePrefix, title, control }: GroupLangProps) => {
  return (
    <>
      <TypographyBase title={title} color="primary"></TypographyBase>
      <BoxCenter>
        {[
          { name: `${namePrefix}.vi`, label: "Vietnamese" },
          { name: `${namePrefix}.en`, label: "English" },
          { name: `${namePrefix}.ko`, label: "Korea" },
          { name: `${namePrefix}.th`, label: "Thailand" },
        ].map(({ name, label }, index) => {
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
    </>
  );
};

export default GroupLang;
