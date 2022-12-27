import {
  Typography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import { PaletteProps } from "@material-ui/system";

export type TypographyProps = PaletteProps & Omit<MuiTypographyProps, "color">;

export interface TypographyBaseProps extends TypographyProps {
  title: string;
}

const TypographyBase = ({
  title,
  ...props
}: PropsWithChildren<TypographyBaseProps>) => {
  return <Typography {...props}>{title}</Typography>;
};

export default TypographyBase;
