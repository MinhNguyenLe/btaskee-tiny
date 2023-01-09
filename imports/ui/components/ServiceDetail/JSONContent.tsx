import { Box } from "@mui/material";
import React from "react";

import { TypographyRegular, TypographyBold } from "../base/TypographyWeight";

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
