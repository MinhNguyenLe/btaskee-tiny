import React from "react";
import TextFieldBase, {
  TextFieldBaseProps,
} from "../mui-base/Form/TextFieldBase";
import { Controller } from "react-hook-form";
import { ControlHookForm } from "../utils/types";

export interface TextFieldControlProps
  extends Omit<TextFieldBaseProps, "innerRef" | "name"> {
  control: ControlHookForm;
  name: string;
}

function TextFieldControl({
  name,
  control,
  label,
  ...props
}: TextFieldControlProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const { ref, ...rest } = field;

        return (
          <TextFieldBase label={label} innerRef={ref} {...rest} {...props} />
        );
      }}
    />
  );
}

export default TextFieldControl;
