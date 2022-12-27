import { Box } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../utils/types";
import BoxCenter from "../../Grid/BoxCenter";
import AddItem from "./AddItem";
import BoxChild from "./BoxChild";
import RemoveItem from "./RemoveItem";

export interface PriceSettingFeeWeekendForCityProps {
  control: ControlHookForm;
}

const PriceSettingFeeWeekendForCity = ({
  control,
}: PriceSettingFeeWeekendForCityProps) => {
  const { fields, remove, append } = useFieldArray({
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
        <AddItem onClick={() => append("")} />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Box key={item.id}>
            <BoxCenter>
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
