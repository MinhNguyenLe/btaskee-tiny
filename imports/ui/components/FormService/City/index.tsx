import { Box, Divider } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ControlHookForm, TypeFormService } from "../../../../utils/types";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import BoxCenter from "../../base/Grid/BoxCenter";
import TextFieldNumber from "../../base/TextFieldStandard/TextFieldNumber";
import TextFieldString from "../../base/TextFieldStandard/TextFieldString";
import AddItem from "../common/AddItem";
import CloneButton from "../common/CloneButton";
import GroupBg from "../common/GroupBg";
import RemoveItem from "../RemoveItem";
import CityDistrict from "./CityDistrict";

export interface CityProps {
  control: ControlHookForm;
}

const City = ({ control }: CityProps) => {
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<TypeFormService>({
      control,
      name: "city",
    });

  const { getValues } = useFormContext<TypeFormService>();

  const onCloneDataCity = (index: number) => {
    append(getValues("city")[index]);
  };

  return (
    <GroupBg>
      <BoxCenter>
        <TypographyBase title="City" color="primary" mr="8px" />
        <AddItem
          onClick={() =>
            append({
              name: "",
              baseCost: 10,
              district: [
                {
                  name: "1",
                  time: [
                    {
                      date: new Date(),
                      endDate: new Date(),
                      endTime: 0,
                      percent: 0,
                      startTime: 0,
                    },
                  ],
                },
              ],
            })
          }
        />
      </BoxCenter>
      <Box>
        {fields.map((field, index) => {
          return (
            <Box key={field.id}>
              <Divider />
              <BoxCenter>
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
                <RemoveItem title="city" onClick={() => remove(index)} />
                <CloneButton
                  title="city"
                  onClick={() => onCloneDataCity(index)}
                />
              </BoxCenter>
              <CityDistrict control={control} nestIndex={index} />
            </Box>
          );
        })}
      </Box>
    </GroupBg>
  );
};

export default City;
