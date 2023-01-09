import { Box } from "@mui/material";
import React from "react";

import TypographyBold from "../base/TypographyWeight/TypographyBold";
import TypographyRegular from "../base/TypographyWeight/TypographyRegular";

interface BasicContentProps {
  boldText: string;
  regularText?: string | Date | number | boolean;
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
          if (typeof regularText !== "string") return regularText.toString();

          return regularText;
        })()}
      ></TypographyRegular>
    </Box>
  );
};

export default BasicContent;
