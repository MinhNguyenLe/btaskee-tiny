import { Typography, Box } from "@mui/material";
import React from "react";
import { TypographyBaseProps } from "../../../mui-base/Typography/TypographyBase";

interface TypographyWeightProps extends TypographyBaseProps {
  title: string;
}

const TypographyWeight = ({
  fontWeight,
  title,
  ...props
}: TypographyWeightProps) => {
  return (
    <Typography component="div">
      <Box {...props} sx={{ fontWeight, m: 1 }}>
        {title}
      </Box>
    </Typography>
  );
};

interface TypographyBoldProps
  extends Omit<TypographyWeightProps, "fontWeight"> {}

export const TypographyBold = ({ ...props }: TypographyBoldProps) => {
  return <TypographyWeight fontWeight="bold" {...props}></TypographyWeight>;
};

interface TypographyRegularProps
  extends Omit<TypographyWeightProps, "fontWeight"> {}

export const TypographyRegular = ({ ...props }: TypographyRegularProps) => {
  return <TypographyWeight fontWeight="regular" {...props}></TypographyWeight>;
};

interface TypographyMediumProps
  extends Omit<TypographyWeightProps, "fontWeight"> {}

const TypographyMedium = ({ ...props }: TypographyMediumProps) => {
  return <TypographyWeight fontWeight="medium" {...props}></TypographyWeight>;
};

export default TypographyMedium;
