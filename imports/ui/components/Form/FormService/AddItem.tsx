import React from "react";
import IconButton from "@mui/material/IconButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export interface AddItemProps {
  onClick?: () => void;
}

const AddItem = ({ onClick }: AddItemProps) => {
  return (
    <IconButton
      color="warning"
      component="label"
      onClick={onClick}
      size="small"
    >
      <ControlPointIcon />
    </IconButton>
  );
};

export default AddItem;
