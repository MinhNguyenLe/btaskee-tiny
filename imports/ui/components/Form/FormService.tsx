import React from "react";
import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";

import { TypeFormService } from "../../utils/types";
import TextFieldControl from "../../hook-form/TextFieldControl";
import GroupServiceContent from "./GroupServiceContent";

const FormService = () => {
  const { control } = useFormContext<TypeFormService>();

  const addNewCity = () => {};

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
      </Box>
      <GroupServiceContent
        control={control}
        title="Text:"
        groupData={[
          { name: "textVi", label: "Vietnamese" },
          { name: "textEn", label: "English" },
          { name: "textKo", label: "Korea" },
          { name: "textTh", label: "Thailand" },
        ]}
      />
      <GroupServiceContent
        control={control}
        title="City:"
        addNewItem={addNewCity}
        groupData={[
          { name: "cityName", label: "City's name" },
          { name: "cityBaseCost", label: "Base cost" },
        ]}
      />
    </Box>
  );
};

export default FormService;
