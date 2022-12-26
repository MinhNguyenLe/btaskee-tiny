import React from "react";
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from "@mui/x-date-pickers/DesktopDatePicker";

export interface DatePickerBaseProps<TInputDate, TDate>
  extends DesktopDatePickerProps<TInputDate, TDate> {}

function DatePickerBase<TInputDate, TDate>({
  ...props
}: DatePickerBaseProps<TInputDate, TDate>) {
  return <DesktopDatePicker {...props} />;
}

export default DatePickerBase;
