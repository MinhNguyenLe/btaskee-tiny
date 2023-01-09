import React from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export interface DeleteItemProps {
  onClick?: () => void;
}

const DeleteItem = ({ onClick }: DeleteItemProps) => {
  return (
    <IconButton color="error" component="label" onClick={onClick} size="small">
      <HighlightOffIcon />
    </IconButton>
  );
};

export default DeleteItem;
