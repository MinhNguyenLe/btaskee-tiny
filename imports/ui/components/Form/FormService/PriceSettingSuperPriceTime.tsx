import { Box } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../../utils/types";
import BoxCenter from "../../Grid/BoxCenter";
import AddItem from "./AddItem";
import BoxChild from "./BoxChild";
import RemoveItem from "./RemoveItem";

export interface PriceSettingSuperPriceTimeProps {
  control: ControlHookForm;
}

const PriceSettingSuperPriceTime = ({
  control,
}: PriceSettingSuperPriceTimeProps) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `priceSetting.surgePriceTime`,
  });

  return (
    <BoxChild>
      <BoxCenter>
        <TypographyBase title="Super price time" color="primary" mr="8px" />
        <AddItem
          onClick={() =>
            append({
              start: 0,
              end: 0,
              rate: 0,
            })
          }
        />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Box key={item.id}>
            <BoxCenter>
              <TextFieldControl
                control={control}
                name={`priceSetting.surgePriceTime.${index}.start`}
                label="Start"
                type="number"
              />
              <TextFieldControl
                control={control}
                name={`priceSetting.surgePriceTime.${index}.end`}
                label="End"
                type="number"
              />
              <TextFieldControl
                control={control}
                name={`priceSetting.surgePriceTime.${index}.rate`}
                label="Rate"
                type="number"
              />
              <RemoveItem onClick={() => remove(index)} />
            </BoxCenter>
          </Box>
        );
      })}
    </BoxChild>
  );
};

export default PriceSettingSuperPriceTime;
