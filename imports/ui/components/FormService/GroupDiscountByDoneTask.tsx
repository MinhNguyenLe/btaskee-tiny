import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../hook-form/TextFieldControl";
import TypographyBase from "../../mui-base/Typography/TypographyBase";
import { ControlHookForm, TypeFormService } from "../../../utils/types";
import GroupBg from "./common/GroupBg";
import AddItem from "./common/AddItem";
import RemoveItem from "./common/RemoveItem";
import BoxCenter from "../base/Grid/BoxCenter";

interface GroupDiscountByDoneTaskProps {
  control: ControlHookForm;
}

const GroupDiscountByDoneTask = ({ control }: GroupDiscountByDoneTaskProps) => {
  const { fields, append, prepend, remove } = useFieldArray<TypeFormService>({
    control,
    name: "discountByDoneTask",
  });

  return (
    <GroupBg>
      <BoxCenter>
        <TypographyBase
          title="Discount by done task"
          color="primary"
          mr="8px"
        />
        <AddItem
          onClick={() =>
            prepend({
              number: 0,
              discount: 0,
            })
          }
        />
      </BoxCenter>
      {fields.map((field, index) => {
        return (
          <BoxCenter
            key={field.id}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "48ch" },
            }}
          >
            <TextFieldControl
              control={control}
              type="number"
              name={`discountByDoneTask.${index}.number`}
              label="Number"
            />
            <TextFieldControl
              control={control}
              type="number"
              name={`discountByDoneTask.${index}.discount`}
              label="Discount"
            />
            <RemoveItem onClick={() => remove(index)} />
          </BoxCenter>
        );
      })}
    </GroupBg>
  );
};

export default GroupDiscountByDoneTask;
