import React from "react";
import TextFieldBase, {
  TextFieldBaseProps,
} from "../mui-base/TextField/TextFieldBase";
import { Controller } from "react-hook-form";
import { ControlHookForm } from "../../utils/types";

export interface TextFieldControlProps
  extends Omit<TextFieldBaseProps, "innerRef" | "name"> {
  control: ControlHookForm;
  name: string;
}

function TextFieldControl({
  name,
  control,
  label,
  type,
  ...props
}: TextFieldControlProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { ref, onChange, ...rest } = field;

        return (
          <TextFieldBase
            onChange={(e) => {
              if (type === "number") {
                onChange(Number(e.target.value));
              } else onChange(e.target.value);
            }}
            label={label}
            innerRef={ref}
            type={type}
            {...rest}
            {...props}
          />
        );
      }}
    />
  );
}

export default TextFieldControl;
