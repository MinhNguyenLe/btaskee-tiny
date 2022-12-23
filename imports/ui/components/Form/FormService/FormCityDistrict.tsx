import React from "react";
import { useFieldArray } from "react-hook-form";
import { ControlHookForm } from "../../../utils/types";
import { Box, Button } from "@mui/material";
import TextFieldControl from "../../../hook-form/TextFieldControl";

export interface FormCityDistrictProps {
  nestIndex: number;
  control: ControlHookForm;
}

const FormCityDistrict = ({ nestIndex, control }: FormCityDistrictProps) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `city.${nestIndex}.district`,
  });

  return (
    <Box>
      {fields.map((item, index) => {
        return (
          <Box key={item.id} display="flex" alignItems="center">
            <TextFieldControl
              control={control}
              name={`city.${nestIndex}.district.${index}].name`}
              label="District's name"
            />
            <Box>
              <Button
                type="button"
                size="small"
                color="warning"
                variant="outlined"
                onClick={() => append({ name: "" })}
                sx={{ marginRight: 1 }}
              >
                Add new district
              </Button>
              <Button
                type="button"
                size="small"
                color="warning"
                variant="outlined"
                onClick={() => remove(index)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default FormCityDistrict;
