import React from "react";
import Table, { TableProps } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

interface TableBaseProps extends TableProps {
  header: JSX.Element;
  body: JSX.Element;
}

export default function TableBase({ header, body, ...props }: TableBaseProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" {...props}>
        <TableHead>{header}</TableHead>
        <TableBody>{body}</TableBody>
      </Table>
    </TableContainer>
  );
}
