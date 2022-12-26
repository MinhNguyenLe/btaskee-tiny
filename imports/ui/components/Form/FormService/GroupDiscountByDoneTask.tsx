import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import TypographyBase from "../../../mui-base/Typography/TypographyBase";
import { ControlHookForm, TypeFormService } from "../../../utils/types";
import GroupBg from "./GroupBg";
import AddItem from "./AddItem";
import RemoveItem from "./RemoveItem";
import BoxCenter from "../../Grid/BoxCenter";

interface GroupDiscountByDoneTaskProps {
  control: ControlHookForm;
}

const GroupDiscountByDoneTask = ({ control }: GroupDiscountByDoneTaskProps) => {
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<TypeFormService>({
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
            append({
              number: 3,
              discount: 2,
            })
          }
        />
      </BoxCenter>
      {fields.map((field, index) => {
        return (
          <BoxCenter key={field.id}>
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
