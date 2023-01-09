import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import DeleteItem, { DeleteItemProps } from "./DeleteItem";
import CloneItem, { CloneItemProps } from "./CloneItem";
import { BoxProps } from "@mui/system";

export interface BoxDeleteItemProps extends DeleteItemProps {}

export const BoxDeleteItem = ({ ...props }: BoxDeleteItemProps) => {
  return (
    <Box display="flex" justifyContent="flex-end" sx={{ paddingTop: "4px" }}>
      <DeleteItem {...props} />
    </Box>
  );
};

export interface BoxDeleteAndCloneItemProps {
  deleteItem: DeleteItemProps;
  cloneItem: CloneItemProps;
}

export const BoxDeleteAndCloneItem = ({
  deleteItem,
  cloneItem,
}: BoxDeleteAndCloneItemProps) => {
  return (
    <Box display="flex" justifyContent="flex-end" sx={{ paddingTop: "4px" }}>
      <DeleteItem {...deleteItem} />
      <CloneItem {...cloneItem} />
    </Box>
  );
};

interface LayoutLayerProps extends Pick<BoxProps, "bgcolor"> {}

const LayoutLayer = ({
  children,
  bgcolor,
}: PropsWithChildren<LayoutLayerProps>) => {
  return (
    <Box
      sx={{
        padding: "0 24px 12px 24px",
        margin: "12px 0",
        borderRadius: "6px",
      }}
      bgcolor={bgcolor}
    >
      {children}
    </Box>
  );
};

export interface Layer1Props {}

const Layer1 = ({ children }: PropsWithChildren<Layer1Props>) => {
  return <LayoutLayer bgcolor="#efefef">{children}</LayoutLayer>;
};

export interface Layer2Props {}

export const Layer2 = ({ children }: PropsWithChildren<Layer2Props>) => {
  return <LayoutLayer bgcolor="#e6e6e6">{children}</LayoutLayer>;
};

export interface Layer3Props {}

export const Layer3 = ({ children }: PropsWithChildren<Layer3Props>) => {
  return <LayoutLayer bgcolor="#dddddd">{children}</LayoutLayer>;
};

export default Layer1;
