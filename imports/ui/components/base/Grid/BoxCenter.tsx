import { Box, BoxProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface BoxCenterProps
  extends Omit<BoxProps, "display" | "alignItems"> {}

const BoxCenter = (props: PropsWithChildren<BoxCenterProps>) => {
  return <Box display="flex" alignItems="center" {...props}></Box>;
};

export default BoxCenter;
