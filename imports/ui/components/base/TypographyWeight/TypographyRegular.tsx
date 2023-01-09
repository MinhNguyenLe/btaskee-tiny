import { Typography, Box } from "@mui/material";
import React from "react";
import { TypographyBaseProps } from "../../../mui-base/Typography/TypographyBase";

interface TypographyRegularProps extends TypographyBaseProps {
  title: string;
}

const TypographyRegular = ({ title, ...props }: TypographyRegularProps) => {
  return (
    <Typography component="div">
      <Box {...props} sx={{ fontWeight: "regular", m: 1 }}>
        {title}
      </Box>
    </Typography>
  );
};

export default TypographyRegular;
