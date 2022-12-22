import React from "react";
import TableBase from "../mui-base/Table/TableBase";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Service } from "../utils/types";
import ServiceIcon from "./ServiceIcon";
import { convertWithCurrency } from "../utils/utils";

interface ServiceTableProps {
  rows: Service[];
  headers: string[];
  onClickRow: () => void;
}

const ServiceTable = ({ rows, headers, onClickRow }: ServiceTableProps) => {
  const header = (
    <TableRow>
      {headers.map((header, index) => (
        <TableCell key={`${index}_${header}`} align="center">
          {header}
        </TableCell>
      ))}
    </TableRow>
  );

  const body = (
    <>
      {rows.map((row) => (
        <TableRow
          key={row._id}
          hover
          sx={{
            "&:last-child td, &:last-child th": {
              border: 0,
            },
            cursor: "pointer",
          }}
          onClick={onClickRow}
        >
          <TableCell>{row.text["en"]}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>
            <ServiceIcon src={row.icon} alt="Icon not found" loading="lazy" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );

  return <TableBase header={header} body={body}></TableBase>;
};

export default ServiceTable;