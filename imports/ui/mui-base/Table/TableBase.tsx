import React, { PropsWithChildren } from "react";
import Table, { TableProps } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

import {
  SortableContainer,
  SortableHandle,
  SortableElement,
} from "react-sortable-hoc";
import { TableRow, TableCell, TableRowProps } from "@mui/material";

const DragHandle = SortableHandle(({ style }) => (
  <span style={{ ...style, ...{ cursor: "move" } }}> {"::::"} </span>
));

const TableBodySortable = SortableContainer(({ children }) => (
  <TableBody>{children}</TableBody>
));

export interface SorTableRowProps extends TableRowProps {}

export const SorTableRow = SortableElement(
  ({ children, ...props }: PropsWithChildren<SorTableRowProps>) => {
    return (
      <TableRow {...props}>
        <TableCell style={{ width: "5%" }}>
          <DragHandle style={{}} />
        </TableCell>
        {children}
      </TableRow>
    );
  }
);

interface TableBaseProps extends TableProps {
  header: JSX.Element;
  body: JSX.Element;
}

interface DragAndDropTableBaseProps extends TableBaseProps {
  dragAndDropRow: (oldIndex: number, newIndex: number) => void;
}

export function DragAndDropTableBase({
  dragAndDropRow,
  header,
  body,
  ...props
}: DragAndDropTableBaseProps) {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    dragAndDropRow(oldIndex, newIndex);
  };

  return (
    <TableContainer component={Paper}>
      <Table {...props}>
        <TableHead>{header}</TableHead>
        <TableBodySortable onSortEnd={onSortEnd} useDragHandle>
          {body}
        </TableBodySortable>
      </Table>
    </TableContainer>
  );
}

export default function TableBase({ header, body, ...props }: TableBaseProps) {
  return (
    <TableContainer component={Paper}>
      <Table {...props}>
        <TableHead>{header}</TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </TableContainer>
  );
}
