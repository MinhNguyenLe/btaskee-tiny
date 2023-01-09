import React from "react";
import TextFieldControl, {
  TextFieldControlProps,
} from "../../../hook-form/TextFieldControl";

export interface TextFieldNumberProps
  extends Pick<TextFieldControlProps, "control" | "name" | "label"> {}

const TextFieldNumber = ({ ...props }: TextFieldNumberProps) => {
  return <TextFieldControl variant="standard" type="number" {...props} />;
};

export default TextFieldNumber;
