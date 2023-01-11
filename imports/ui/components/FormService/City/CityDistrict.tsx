import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ControlHookForm, TypeFormService } from "../../../../utils/types";
import { Box } from "@mui/material";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import AddItem from "../common/AddItem";
import RemoveItem from "../common/RemoveItem";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import BoxCenter from "../../base/Grid/BoxCenter";
import DatePickerControl from "../../../hook-form/DatePickerControl";
import { BoxDeleteAndCloneItem, Layer2, Layer3 } from "../common/Layer";
import { defaultCityDistrict } from "../../../default-value-form";

export interface CityDistrictProps {
  nestIndex: number;
  control: ControlHookForm;
}

const CityDistrict = ({ nestIndex, control }: CityDistrictProps) => {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `city.${nestIndex}.district`,
  });

  const { getValues } = useFormContext<TypeFormService>();

  const onCloneDataDistrict = (index: number) => {
    const dataDistricts = getValues(`city.${nestIndex}.district`);

    if (dataDistricts) prepend(dataDistricts[index]);
  };

  return (
    <Box>
      <BoxCenter>
        <TypographyBase title="District" color="primary" mr="8px" />
        <AddItem
          onClick={() => prepend(defaultCityDistrict)}
          data-testid="District_add"
        />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Layer2 key={item.id}>
            <BoxDeleteAndCloneItem
              deleteItem={{ onClick: () => remove(index) }}
              cloneItem={{ onClick: () => onCloneDataDistrict(index) }}
            />
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "48ch" },
              }}
            >
              <TextFieldControl
                control={control}
                name={`city.${nestIndex}.district.${index}.name`}
                label="Name"
              />
            </Box>
            <CityDistrictTime
              control={control}
              nestIndex1={nestIndex}
              nestIndex2={index}
            />
          </Layer2>
        );
      })}
    </Box>
  );
};

interface CityDistrictTimeProps {
  nestIndex1: number;
  nestIndex2: number;
  control: ControlHookForm;
}

const CityDistrictTime = ({
  nestIndex1,
  nestIndex2,
  control,
}: CityDistrictTimeProps) => {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `city.${nestIndex1}.district.${nestIndex2}.time`,
  });

  const { getValues } = useFormContext<TypeFormService>();

  const onCloneDataDistrictTime = (index: number) => {
    const dataDistrictTime = getValues(
      `city.${nestIndex1}.district.${nestIndex2}.time`
    );
    if (dataDistrictTime) prepend(dataDistrictTime[index]);
  };

  return (
    <Box>
      <BoxCenter>
        <TypographyBase title="District's Time" color="primary" mr="8px" />
        <AddItem onClick={() => prepend(defaultCityDistrict.time)} />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Layer3 key={item.id}>
            <BoxDeleteAndCloneItem
              deleteItem={{ onClick: () => remove(index) }}
              cloneItem={{ onClick: () => onCloneDataDistrictTime(index) }}
            />
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "28ch" },
              }}
            >
              <DatePickerControl
                control={control}
                label="Date"
                name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.date`}
              />
              <DatePickerControl
                control={control}
                name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.endDate`}
                label="End date"
              />
              <TextFieldControl
                control={control}
                name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.startTime`}
                label="Start time"
                type="number"
              />
              <TextFieldControl
                control={control}
                name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.endTime`}
                label="End time"
                type="number"
              />
              <TextFieldControl
                control={control}
                name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.percent`}
                label="Percent"
                type="number"
              />
            </Box>
          </Layer3>
        );
      })}
    </Box>
  );
};

export default CityDistrict;
