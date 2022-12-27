import React from "react";
import DatePickerControl, {
  DatePickerControlProps,
} from "../../../hook-form/DatePickerControl";
import { ControlHookForm } from "../../../utils/types";

export interface DateDistrictProps extends DatePickerControlProps<Date, Date> {
  control: ControlHookForm;
  name: string;
  label: string;
}

const DateDistrict = ({
  label,
  name,
  control,
  ...props
}: DateDistrictProps) => {
  return (
    <DatePickerControl
      label={label}
      control={control}
      name={name}
      inputFormat="MM/DD/YYYY"
      {...props}
    />
  );
};

export default DateDistrict;
