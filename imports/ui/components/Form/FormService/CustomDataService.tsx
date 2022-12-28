import { Box } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import JSONEditorControl from "../../../hook-form/JSONEditorControl";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm, TypeFormService } from "../../../utils/types";
import BoxCenter from "../../Grid/BoxCenter";
import AddItem from "./AddItem";
import GroupBg from "./GroupBg";
import RemoveItem from "./RemoveItem";

interface CustomDataServiceProps {
  control: ControlHookForm;
}

const CustomDataService = ({ control }: CustomDataServiceProps) => {
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<TypeFormService>({
      control,
      name: "customField",
    });

  return (
    <GroupBg>
      <BoxCenter>
        <TypographyBase
          title="Custom data for service"
          color="primary"
          mr="8px"
        />
        <AddItem
          onClick={() =>
            append({
              key: "",
              value: {},
            })
          }
        />
      </BoxCenter>
      {fields.map((field, index) => {
        return (
          <Box mt={2} key={field.id}>
            <BoxCenter>
              <TextFieldControl
                control={control}
                name={`customField.${index}.key`}
                label="Key"
              />
              <Box>
                <TypographyBase title="Value:" color="primary"></TypographyBase>
                <JSONEditorControl
                  height="200px"
                  width="200px"
                  control={control}
                  name={`customField.${index}.value`}
                />
              </Box>
              <RemoveItem onClick={() => remove(index)} />
            </BoxCenter>
          </Box>
        );
      })}
    </GroupBg>
  );
};

export default CustomDataService;
