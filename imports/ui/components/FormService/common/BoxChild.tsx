import { Box, BoxProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface BoxChildProps extends BoxProps {}

const BoxChild = ({ children }: PropsWithChildren<BoxChildProps>) => {
  return <Box sx={{ padding: "0 24px" }}>{children}</Box>;
};

export default BoxChild;
