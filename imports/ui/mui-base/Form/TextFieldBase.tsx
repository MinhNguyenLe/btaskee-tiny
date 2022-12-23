import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export interface TextFieldBaseProps extends Omit<TextFieldProps, "ref"> {
  innerRef: TextFieldProps["ref"];
}

const TextFieldBase = ({ innerRef, ...props }: TextFieldBaseProps) => {
  return <TextField ref={innerRef} {...props} />;
};

export default TextFieldBase;
