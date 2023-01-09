import { Box } from "@mui/material";
import React from "react";

import TypographyBold from "../base/TypographyWeight/TypographyBold";
import TypographyRegular from "../base/TypographyWeight/TypographyRegular";

interface JSONContentProps {
  boldText: string;
  regularText?: string;
}

const JSONContent = ({ boldText, regularText }: JSONContentProps) => {
  return (
    <Box display="flex">
      <TypographyBold title={boldText + ":"}></TypographyBold>
      <pre>{regularText}</pre>
    </Box>
  );
};

export default JSONContent;
