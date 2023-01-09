import { Typography, Box } from "@mui/material";
import React from "react";
import { TypographyBaseProps } from "../../../mui-base/Typography/TypographyBase";

interface TypographyBoldProps extends TypographyBaseProps {
  title: string;
}

const TypographyBold = ({ title, ...props }: TypographyBoldProps) => {
  return (
    <Typography component="div">
      <Box {...props} sx={{ fontWeight: "bold", m: 1 }}>
        {title}
      </Box>
    </Typography>
  );
};

export default TypographyBold;
