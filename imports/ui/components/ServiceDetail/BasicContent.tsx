import { Box } from "@mui/material";
import React from "react";

import { TypographyRegular, TypographyBold } from "../base/TypographyWeight";

export interface BasicContentProps {
  boldText: string;
  regularText?: null | string | Date | number | boolean;
}

const BasicContent = ({ boldText, regularText }: BasicContentProps) => {
  return (
    <Box display="flex">
      <TypographyBold title={boldText + ":"}></TypographyBold>
      <TypographyRegular
        title={(function () {
          if (!regularText) return "";
          if (typeof regularText === "boolean")
            return regularText ? "Yes" : "No";
          if (typeof regularText === "number") return regularText.toString();
          if (typeof regularText === "string") return regularText;

          return regularText.toLocaleDateString("en-US");
        })()}
      ></TypographyRegular>
    </Box>
  );
};

export default BasicContent;
