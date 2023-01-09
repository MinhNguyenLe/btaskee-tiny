import React from "react";
import TextFieldControl from "../../hook-form/TextFieldControl";

import TypographyBase from "../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../utils/types";
import BoxCenter from "../base/Grid/BoxCenter";
import { Box } from "@mui/material";

interface GroupLangProps {
  title: string;
  control: ControlHookForm;
  namePrefix: string;
}

const GroupLang = ({ namePrefix, title, control }: GroupLangProps) => {
  return (
    <>
      <TypographyBase title={title} color="primary"></TypographyBase>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "48ch" },
        }}
      >
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
      </Box>
    </>
  );
};

export default GroupLang;
