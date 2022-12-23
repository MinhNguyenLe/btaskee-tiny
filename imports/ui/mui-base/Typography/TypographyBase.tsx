import {
  Typography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";
import { palette, PaletteProps } from "@material-ui/system";

export type TypographyProps = PaletteProps & Omit<MuiTypographyProps, "color">;

export interface TypographyBaseProps extends TypographyProps {
  title: string;
}

const TypographyBase = ({ title, ...props }: TypographyBaseProps) => {
  return <Typography {...props}>{title}</Typography>;
};

export default TypographyBase;
