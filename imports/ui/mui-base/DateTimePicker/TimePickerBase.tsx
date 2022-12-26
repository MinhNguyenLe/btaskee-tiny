import React from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";

const TimePickerBase = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    console.log(newValue?.hour());
  };

  return (
    <TimePicker
      label="Time"
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default TimePickerBase;
