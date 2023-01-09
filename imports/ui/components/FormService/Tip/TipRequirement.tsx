import { Box, Divider } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm } from "../../../../utils/types";
import BoxCenter from "../../base/Grid/BoxCenter";
import AddItem from "../common/AddItem";
import BoxChild from "../common/BoxChild";
import GroupLang from "../GroupLang";
import RemoveItem from "../common/RemoveItem";
import Layer1, { BoxDeleteItem } from "../common/Layer";

export interface TipRequirementProps {
  control: ControlHookForm;
}

const TipRequirement = ({ control }: TipRequirementProps) => {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `tip.requirements`,
  });

  return (
    <BoxChild>
      <BoxCenter>
        <TypographyBase title="Requirement" color="primary" mr="8px" />
        <AddItem
          onClick={() =>
            prepend({
              type: 0,
              cost: 0,
              applyForCities: [""],
              text: {
                vi: "",
                en: "",
                th: "",
                ko: "",
              },
            })
          }
        />
      </BoxCenter>
      <BoxChild>
        {fields.map((item, index) => {
          return (
            <Layer1 key={item.id}>
              <BoxDeleteItem onClick={() => remove(index)} />
              <Box mb={2}>
                <GroupLang
                  title="Text:"
                  namePrefix={`tip.requirements.${index}.text`}
                  control={control}
                />
              </Box>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "48ch" },
                }}
              >
                <TextFieldControl
                  control={control}
                  name={`tip.requirements.${index}.type`}
                  label="Type"
                  type="number"
                />
                <TextFieldControl
                  control={control}
                  name={`tip.requirements.${index}.cost`}
                  label="Cost"
                  type="number"
                />
              </Box>
              <BoxCenter>
                <ApplyForCities control={control} nestIndex={index} />
              </BoxCenter>
            </Layer1>
          );
        })}
      </BoxChild>
    </BoxChild>
  );
};

interface ApplyForCitiesProps {
  control: ControlHookForm;
  nestIndex: number;
}

const ApplyForCities = ({ control, nestIndex }: ApplyForCitiesProps) => {
  const { fields, remove, prepend } = useFieldArray({
    control,
    name: `tip.requirements.${nestIndex}.applyForCities`,
  });

  return (
    <Box>
      <BoxCenter>
        <TypographyBase title="Apply for cities" color="primary" mr="8px" />
        <AddItem onClick={() => prepend("yes")} />
      </BoxCenter>
      {fields.map((item, index) => {
        return (
          <Box
            key={item.id}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "48ch" },
            }}
          >
            <BoxCenter>
              <TextFieldControl
                control={control}
                name={`tip.requirements.${nestIndex}.applyForCities.${index}`}
                label="City"
              />
              <RemoveItem onClick={() => remove(index)} />
            </BoxCenter>
          </Box>
        );
      })}
    </Box>
  );
};

export default TipRequirement;
