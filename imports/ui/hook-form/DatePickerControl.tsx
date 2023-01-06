import React from "react";
import { Controller } from "react-hook-form";
import DatePickerBase, {
  DatePickerBaseProps,
} from "../mui-base/DateTimePicker/DatePickerBase";
import TextFieldBase from "../mui-base/TextField/TextFieldBase";
import { ControlHookForm } from "../../utils/types";

export interface DatePickerControlProps
  extends Omit<
    DatePickerBaseProps<Date, Date>,
    "name" | "renderInput" | "value" | "onChange" | "onBlur"
  > {
  control: ControlHookForm;
  name: string;
}

function DatePickerControl({
  name,
  control,
  ...props
}: DatePickerControlProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const { ref, value, onChange, ...rest } = field;

        return (
          <DatePickerBase<Date, Date>
            renderInput={(params) => (
              <TextFieldBase name={name} innerRef={ref} {...params} />
            )}
            value={new Date(value)}
            onChange={(event) => {
              if (event) {
                onChange(new Date(event));
              } else throw new Error("Your date is incorrect!");
            }}
            inputFormat="MM/DD/YYYY"
            // {...rest}
            {...props}
          />
        );
      }}
    />
  );
}

export default DatePickerControl;
