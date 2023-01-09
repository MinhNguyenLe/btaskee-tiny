import { Button, ButtonProps } from "@mui/material";
import React from "react";

export interface CloneButtonProps extends Omit<ButtonProps, "title"> {
  title?: string;
}

const CloneButton = ({ title, ...props }: CloneButtonProps) => {
  return (
    <Button size="small" variant="outlined" {...props}>
      {`Clone data ${title}`}
    </Button>
  );
};

export default CloneButton;
