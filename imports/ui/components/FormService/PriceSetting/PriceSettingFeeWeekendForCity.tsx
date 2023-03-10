import { Box } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../../utils/types";
import BoxCenter from "../../base/Grid/BoxCenter";
import AddItem from "../common/AddItem";
import BoxChild from "../common/BoxChild";
import RemoveItem from "../common/RemoveItem";

export interface PriceSettingFeeWeekendForCityProps {
  control: ControlHookForm;
}

const PriceSettingFeeWeekendForCity = ({
  control,
}: PriceSettingFeeWeekendForCityProps) => {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `priceSetting.feeWeekendApplyForCity`,
  });

  return (
    <BoxChild>
      <BoxCenter>
        <TypographyBase
          title="Fee weekend apply for city"
          color="primary"
          mr="8px"
        />
        <AddItem onClick={() => prepend("0")} />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Box key={item.id}>
            <BoxCenter
              sx={{
                "& .MuiTextField-root": { m: 1, width: "48ch" },
              }}
            >
              <TextFieldControl
                control={control}
                name={`priceSetting.feeWeekendApplyForCity.${index}`}
                label="Fee"
              />
              <RemoveItem onClick={() => remove(index)} />
            </BoxCenter>
          </Box>
        );
      })}
    </BoxChild>
  );
};

export default PriceSettingFeeWeekendForCity;
