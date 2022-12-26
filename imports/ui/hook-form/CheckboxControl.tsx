import { FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import CheckboxBase, {
  CheckboxBaseProps,
} from "../mui-base/Checkbox/CheckboxBase";
import { ControlHookForm } from "../utils/types";

export interface CheckboxControlProps
  extends Omit<CheckboxBaseProps, "name" | "innerRef"> {
  label: string;
  control: ControlHookForm;
  name: string;
  logicChecked?: (value: any) => boolean;
}

function CheckboxControl({
  label,
  control,
  name,
  logicChecked,
  ...props
}: CheckboxControlProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const { ref, value, ...rest } = field;

        if (!logicChecked)
          return (
            <FormControlLabel
              control={
                <CheckboxBase
                  innerRef={ref}
                  checked={value}
                  {...rest}
                  {...props}
                />
              }
              label={label}
            />
          );

        return (
          <FormControlLabel
            control={
              <CheckboxBase
                innerRef={ref}
                checked={logicChecked(value)}
                {...rest}
                {...props}
              />
            }
            label={label}
          />
        );
      }}
    />
  );
}

export default CheckboxControl;
