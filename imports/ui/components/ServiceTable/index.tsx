import React from "react";
import {
  SorTableRow,
  DragAndDropTableBase,
} from "../../mui-base/Table/TableBase";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Service } from "../../../utils/types";
import ServiceIcon from "../base/Icon/ServiceIcon";

import { arrayMove } from "react-sortable-hoc";
import { queryClient } from "../../AppProvider";

export interface ServiceTableProps {
  rows: Service[];
  headers: string[];
  onClickRow: (idService) => void;
  setIsDragAndDrop: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServiceTable = ({
  rows,
  headers,
  onClickRow,
  setIsDragAndDrop,
}: ServiceTableProps) => {
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
    if (!rows || !Array.isArray(rows)) {
      throw new Error("Why don't have data of services");
    }

    queryClient.setQueryData(["list-services"], (oldData) => {
      if (Array.isArray(oldData)) {
        console.log(arrayMove(oldData, oldIndex, newIndex), "change");
        return arrayMove(oldData, oldIndex, newIndex);
      }
      throw new Error("Data drag and drop incorrect !");
    });

    setIsDragAndDrop(true);
  };

  const body = (
    <>
      {rows &&
        Array.isArray(rows) &&
        rows.map((row, index) => (
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
