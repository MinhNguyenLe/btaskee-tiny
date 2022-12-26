import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";

export interface RemoveItemProps {
  onClick?: () => void;
  title?: string;
}

const RemoveItem = ({ onClick, title }: RemoveItemProps) => {
  return (
    <IconButton
      color="warning"
      component="label"
      onClick={onClick}
      size="small"
    >
      <DeleteIcon />
      {title ? (
        <TypographyBase fontSize="13px" title={title}></TypographyBase>
      ) : null}
    </IconButton>
  );
};

export default RemoveItem;
