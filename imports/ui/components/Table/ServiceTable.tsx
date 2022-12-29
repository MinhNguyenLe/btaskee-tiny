import React, { useState } from "react";
import {
  SorTableRow,
  DragAndDropTableBase,
} from "../../mui-base/Table/TableBase";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Service } from "../../utils/types";
import ServiceIcon from "../Icon/ServiceIcon";

import { arrayMove } from "react-sortable-hoc";

export interface ServiceTableProps {
  rows: Service[] | unknown; //TODO: refactor type
  headers: string[];
  onClickRow: (idService) => void;
}

const ServiceTable = ({ rows, headers, onClickRow }: ServiceTableProps) => {
  const [services, setServices] = useState(rows);

  const header = (
    <TableRow>
      {headers.map((header, index) => (
        <TableCell key={`${index}_${header}`} align="center">
          {header}
        </TableCell>
      ))}
    </TableRow>
  );

  const onDragAndDropRecord = (oldIndex, newIndex) => {
    if (services && Array.isArray(services)) {
      console.log(
        "DRAG AND DROP ------",
        arrayMove(services, oldIndex, newIndex)
      );

      setServices(arrayMove(services, oldIndex, newIndex));
    } else throw new Error("Why don't have data of services");
  };

  const body = (
    <>
      {services &&
        Array.isArray(services) &&
        services.map((row, index) => (
          <SorTableRow
            index={index}
            key={row._id}
            hover
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
              cursor: "pointer",
            }}
            onClick={() => onClickRow(row._id)}
          >
            <TableCell>{row.text["en"]}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <ServiceIcon src={row.icon} alt="Icon not found" loading="lazy" />
            </TableCell>
          </SorTableRow>
        ))}
    </>
  );

  return (
    <DragAndDropTableBase
      dragAndDropRow={onDragAndDropRecord}
      sx={{ minWidth: 650 }}
      size="small"
      header={header}
      body={body}
    ></DragAndDropTableBase>
  );
};

export default ServiceTable;
