import React from "react";
import { Controller } from "react-hook-form";
import DatePickerBase, {
  DatePickerBaseProps,
} from "../mui-base/DateTimePicker/DatePickerBase";
import TextFieldBase from "../mui-base/Form/TextFieldBase";
import { ControlHookForm } from "../utils/types";

export interface DatePickerControlProps<TInputDate, TDate>
  extends Omit<
    DatePickerBaseProps<TInputDate, TDate>,
    "name" | "renderInput" | "value" | "onChange" | "onBlur"
  > {
  control: ControlHookForm;
  name: string;
}

function DatePickerControl<TInputDate, TDate>({
  name,
  control,
  ...props
}: DatePickerControlProps<TInputDate, TDate>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const { ref, ...rest } = field;

        return (
          <DatePickerBase<TInputDate, TDate>
            renderInput={(params) => (
              <TextFieldBase innerRef={ref} {...params} />
            )}
            {...rest}
            {...props}
          />
        );
      }}
    />
  );
}

export default DatePickerControl;
