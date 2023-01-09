import React from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

// from library
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

export interface JSONDetailProps extends JSONInputProperties {}

const JSONDetail = ({ ...props }: JSONDetailProps) => {
  return <JSONInput locale={locale} height="550px" {...props} />;
};

export default JSONDetail;
