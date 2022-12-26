import React from "react";
import { Checkbox, CheckboxProps } from "@mui/material";

export interface CheckboxBaseProps extends Omit<CheckboxProps, "ref"> {
  innerRef: CheckboxProps["ref"];
}

const CheckboxBase = ({ innerRef, ...props }: CheckboxBaseProps) => {
  return <Checkbox ref={innerRef} {...props} />;
};

export default CheckboxBase;
