import { Box } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";
import JSONEditorControl from "../../hook-form/JSONEditorControl";
import TextFieldControl from "../../hook-form/TextFieldControl";
import TypographyBase from "../../mui-base/Typography/TypographyBase";
import { ControlHookForm, TypeFormService } from "../../../utils/types";
import BoxCenter from "../base/Grid/BoxCenter";
import AddItem from "./common/AddItem";
import GroupBg from "./common/GroupBg";
import RemoveItem from "./common/RemoveItem";
import { defaultCustomField } from "../../default-value-form";

interface CustomDataServiceProps {
  control: ControlHookForm;
}

const CustomDataService = ({ control }: CustomDataServiceProps) => {
  const { fields, append, prepend, remove } = useFieldArray<TypeFormService>({
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
        <AddItem onClick={() => prepend(defaultCustomField)} />
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
                  width="600px"
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
