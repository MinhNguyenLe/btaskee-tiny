import React from "react";
import { Controller } from "react-hook-form";
import { ControlHookForm } from "../../utils/types";
import locale from "react-json-editor-ajrm/locale/en";
import JSONInput from "react-json-editor-ajrm";

export interface JSONEditorControlProps extends JSONInputProperties {
  control: ControlHookForm;
  name: string;
}

const JSONEditorControl = ({ control, name, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;

        return (
          <JSONInput
            locale={locale}
            placeholder={value}
            onChange={(e) => {
              onChange(e.jsObject);
            }}
            {...props}
          />
        );
      }}
    />
  );
};

interface colors {
  default?: string | undefined;
  background?: string | undefined;
  background_warning?: string | undefined;
  string?: string | undefined;
  number?: string | undefined;
  colon?: string | undefined;
  keys?: string | undefined;
  keys_whiteSpace?: string | undefined;
  primitive?: string | undefined;
}

interface error {
  reason?: string | undefined;
  line?: number | undefined;
  theme?: string | undefined;
}

interface style {
  outerBox?: any;
  container?: any;
  warningBox?: any;
  errorMessage?: any;
  body?: any;
  labelColumn?: any;
  labels?: any;
  contentBox?: any;
}

interface JSONInputProperties {
  id?: string | undefined;
  placeholder?: any;
  reset?: boolean | undefined;
  viewOnly?: boolean | undefined;
  onChange?: any;
  onBlur?: any;
  confirmGood?: boolean | undefined;
  height?: string | undefined;
  width?: string | undefined;
  onKeyPressUpdate?: boolean | undefined;
  waitAfterKeyPress?: number | undefined;
  modifyErrorText?: ((errorReason: string) => string) | undefined;
  error?: error | undefined;
  colors?: colors | undefined;
  style?: style | undefined;
  theme?: string | undefined;
}

export default JSONEditorControl;
