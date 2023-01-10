import { Box } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ControlHookForm, TypeFormService } from "../../../../utils/types";
import { defaultCity } from "../../../default-value-form";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import BoxCenter from "../../base/Grid/BoxCenter";
import TextFieldNumber from "../../base/TextFieldStandard/TextFieldNumber";
import TextFieldString from "../../base/TextFieldStandard/TextFieldString";
import AddItem from "../common/AddItem";
import GroupBg from "../common/GroupBg";
import Layer1, { BoxDeleteAndCloneItem } from "../common/Layer";
import CityDistrict from "./CityDistrict";

export interface CityProps {
  control: ControlHookForm;
}

const City = ({ control }: CityProps) => {
  const { fields, prepend, remove } = useFieldArray<TypeFormService>({
    control,
    name: "city",
  });

  const { getValues } = useFormContext<TypeFormService>();

  const onCloneDataCity = (index: number) => {
    prepend(getValues("city")[index]);
  };

  return (
    <GroupBg>
      <BoxCenter>
        <TypographyBase title="City" color="primary" mr="8px" />
        <AddItem onClick={() => prepend(defaultCity)} />
      </BoxCenter>
      <Box>
        {fields.map((field, index) => {
          return (
            <Layer1 key={field.id}>
              <BoxDeleteAndCloneItem
                deleteItem={{ onClick: () => remove(index) }}
                cloneItem={{ onClick: () => onCloneDataCity(index) }}
              />
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "48ch" },
                }}
              >
                <TextFieldString
                  control={control}
                  name={`city.${index}.name`}
                  label="City's name"
                />
                <TextFieldNumber
                  control={control}
                  name={`city.${index}.baseCost`}
                  label="Base cost"
                />
              </Box>
              <CityDistrict control={control} nestIndex={index} />
            </Layer1>
          );
        })}
      </Box>
    </GroupBg>
  );
};

export default City;
