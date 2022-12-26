import React from "react";
import DatePickerControl from "../../../hook-form/DatePickerControl";

export interface DateDistrictProps {
  control: ControlHookForm;
  name: string;
  label: string;
}

const DateDistrict = ({ label, name, control }) => {
  return (
    <DatePickerControl<Date, Date>
      label={label}
      control={control}
      name={name}
      inputFormat="MM/DD/YYYY"
      onChange={() => {}}
    />
  );
};

export default DateDistrict;
