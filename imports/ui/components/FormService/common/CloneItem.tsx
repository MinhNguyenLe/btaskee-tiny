import FileCopyIcon from "@mui/icons-material/FileCopy";
import React from "react";
import IconButton from "@mui/material/IconButton";

export interface CloneItemProps {
  onClick?: () => void;
}

const CloneItem = ({ onClick }: CloneItemProps) => {
  return (
    <IconButton
      color="primary"
      component="label"
      onClick={onClick}
      size="small"
    >
      <FileCopyIcon />
    </IconButton>
  );
};

export default CloneItem;
