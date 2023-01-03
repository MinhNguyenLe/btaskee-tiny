import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ControlHookForm, TypeFormService } from "../../../../utils/types";
import { Box } from "@mui/material";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import AddItem from "./AddItem";
import RemoveItem from "./RemoveItem";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import BoxCenter from "../../Grid/BoxCenter";
import BoxChild from "./BoxChild";
import DatePickerControl from "../../../hook-form/DatePickerControl";
import CloneButton from "./CloneButton";

export interface CityDistrictProps {
  nestIndex: number;
  control: ControlHookForm;
}

const CityDistrict = ({ nestIndex, control }: CityDistrictProps) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `city.${nestIndex}.district`,
  });

  const { getValues } = useFormContext<TypeFormService>();

  const onCloneDataDistrict = (index: number) => {
    const dataDistricts = getValues(`city.${nestIndex}.district`);

    if (dataDistricts) append(dataDistricts[index]);
  };

  return (
    <BoxChild>
      <BoxCenter>
        <TypographyBase title="District" color="primary" mr="8px" />
        <AddItem onClick={() => append({ name: "" })} />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Box key={item.id}>
            <BoxCenter>
              <TextFieldControl
                control={control}
                name={`city.${nestIndex}.district.${index}.name`}
                label="Name"
              />
              <RemoveItem title="district" onClick={() => remove(index)} />
              <CloneButton
                title="district"
                onClick={() => onCloneDataDistrict(index)}
              />
            </BoxCenter>
            <CityDistrictTime
              control={control}
              nestIndex1={nestIndex}
              nestIndex2={index}
            />
          </Box>
        );
      })}
    </BoxChild>
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
  const { fields, remove, append } = useFieldArray({
    control,
    name: `city.${nestIndex1}.district.${nestIndex2}.time`,
  });

  const { getValues } = useFormContext<TypeFormService>();

  const onCloneDataDistrictTime = (index: number) => {
    const dataDistrictTime = getValues(
      `city.${nestIndex1}.district.${nestIndex2}.time`
    );
    if (dataDistrictTime) append(dataDistrictTime[index]);
  };

  return (
    <BoxChild>
      <BoxCenter>
        <TypographyBase title="District's Time" color="primary" mr="8px" />
        <AddItem
          onClick={() =>
            append({
              date: new Date(),
              endDate: new Date(),
              endTime: 0,
              percent: 0,
              startTime: 0,
            })
          }
        />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <BoxCenter key={item.id}>
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
              name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.percent`}
              label="Percent"
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
              name={`city.${nestIndex1}.district.${nestIndex2}.time.${index}.startTime`}
              label="Start time"
              type="number"
            />
            <RemoveItem onClick={() => remove(index)} />
            <CloneButton
              title="district's time"
              onClick={() => onCloneDataDistrictTime(index)}
            />
          </BoxCenter>
        );
      })}
    </BoxChild>
  );
};

export default CityDistrict;
