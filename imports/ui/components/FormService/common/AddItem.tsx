import React from "react";
import IconButton from "@mui/material/IconButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export interface AddItemProps {
  onClick?: () => void;
}

const AddItem = ({ onClick, ...props }: AddItemProps) => {
  return (
    <IconButton
      color="warning"
      component="label"
      onClick={onClick}
      size="small"
      {...props}
    >
      <ControlPointIcon />
    </IconButton>
  );
};

export default AddItem;
