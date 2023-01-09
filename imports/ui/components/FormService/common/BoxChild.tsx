import { Box, BoxProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface BoxChildProps extends BoxProps {}

const BoxChild = ({ children, ...props }: PropsWithChildren<BoxChildProps>) => {
  return (
    <Box sx={{ padding: "0 24px" }} {...props}>
      {children}
    </Box>
  );
};

export default BoxChild;
