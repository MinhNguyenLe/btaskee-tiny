import React from "react";
import TextFieldControl, {
  TextFieldControlProps,
} from "../../../hook-form/TextFieldControl";

export interface TextFieldStringProps
  extends Pick<TextFieldControlProps, "control" | "name" | "label"> {}

const TextFieldString = ({ ...props }: TextFieldStringProps) => {
  return <TextFieldControl variant="standard" {...props} />;
};

export default TextFieldString;
