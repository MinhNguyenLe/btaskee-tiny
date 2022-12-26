import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface GroupByProps {}

const GroupBg = ({ children }: PropsWithChildren<GroupByProps>) => {
  return (
    <Box sx={{ padding: 2, margin: "16px 0" }} bgcolor="#FCF9F9">
      {children}
    </Box>
  );
};

export default GroupBg;
