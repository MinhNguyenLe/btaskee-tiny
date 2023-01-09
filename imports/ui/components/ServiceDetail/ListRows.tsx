import { Box } from "@mui/material";
import React from "react";
import TypographyMedium, {
  TypographyBold,
  TypographyRegular,
} from "../base/TypographyWeight";

import BoxChild from "../FormService/common/BoxChild";

export interface ChildContentProps {
  mediumText: string;
  regularText?: null | string | Date | number | boolean;
}

const ChildContent = ({ mediumText, regularText }: ChildContentProps) => {
  return (
    <Box display="flex">
      <TypographyMedium title={mediumText + ":"}></TypographyMedium>
      <TypographyRegular
        title={(function () {
          if (!regularText) return "";
          if (typeof regularText === "boolean")
            return regularText ? "Yes" : "No";
          if (typeof regularText === "number") return regularText.toString();
          if (typeof regularText === "string") return regularText;

          return regularText.toLocaleDateString("en-US");
        })()}
      ></TypographyRegular>
    </Box>
  );
};

interface ListRowsProps {
  boldText: string;
  list?: Array<ChildContentProps>;
}

const ListRows = ({ boldText, list }: ListRowsProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <TypographyBold title={boldText + ":"}></TypographyBold>
      {!list ? null : (
        <BoxChild>
          {list.map((item, index) => {
            return <ChildContent key={index} {...item} />;
          })}
        </BoxChild>
      )}
    </Box>
  );
};

export default ListRows;
