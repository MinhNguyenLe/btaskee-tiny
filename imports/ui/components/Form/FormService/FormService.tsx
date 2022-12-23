import React from "react";
import { Box, Button, Divider } from "@mui/material";

import { useFormContext, useFieldArray } from "react-hook-form";

import { TypeFormService } from "../../../utils/types";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import GroupServiceContent from "./GroupServiceContent";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { CheckBox } from "@mui/icons-material";
import FormCityDistrict from "./FormCityDistrict";

const FormService = () => {
  const { control, register } = useFormContext<TypeFormService>();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "city",
    }
  );

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
      <Box>
        <Box display="flex" alignItems="center">
          <TypographyBase title="City" color="primary" mr="8px" />
          <Button
            type="button"
            size="small"
            color="warning"
            variant="outlined"
            onClick={() =>
              append({
                name: "",
                baseCost: 10,
                district: [
                  {
                    name: "1",
                    time: [
                      {
                        date: new Date(),
                        endDate: new Date(),
                        endTime: 0,
                        percent: 0,
                        startTime: 0,
                      },
                    ],
                  },
                ],
              })
            }
          >
            Add new city
          </Button>
        </Box>
        {fields.map((field, index) => (
          <Box key={field.id}>
            <Box display="flex" alignItems="center">
              <TextFieldControl
                control={control}
                name={`city.${index}.name`}
                label="City's name"
              />
              <TextFieldControl
                control={control}
                name={`city.${index}.baseCost`}
                label="Base cost"
              />
              <Box>
                <Button
                  type="button"
                  variant="outlined"
                  size="small"
                  color="warning"
                  onClick={() => remove(index)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
            <FormCityDistrict control={control} nestIndex={index} />
          </Box>
        ))}
        {/* <Divider /> */}
      </Box>
      {/* <Box>
        <CheckBox />
      </Box> */}
    </Box>
  );
};

export default FormService;
