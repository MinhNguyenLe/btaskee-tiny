import React from "react";
import { useFieldArray } from "react-hook-form";
import TextFieldControl from "../../hook-form/TextFieldControl";
import TypographyBase from "../../mui-base/Typography/TypographyBase";
import { ControlHookForm, TypeFormService } from "../../../utils/types";
import GroupBg from "./common/GroupBg";
import AddItem from "./common/AddItem";
import RemoveItem from "./RemoveItem";
import BoxCenter from "../base/Grid/BoxCenter";

interface GroupDiscountByDurationProps {
  control: ControlHookForm;
}

const GroupDiscountByDuration = ({
  control,
  ...props
}: GroupDiscountByDurationProps) => {
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<TypeFormService>({
      control,
      name: "discountByDuration",
    });

  return (
    <GroupBg>
      <BoxCenter>
        <TypographyBase title="Discount by duration" color="primary" mr="8px" />
        <AddItem
          onClick={() =>
            append({
              duration: 0,
              discount: 0,
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
              name={`discountByDuration.${index}.duration`}
              label="Duration"
            />
            <TextFieldControl
              control={control}
              type="number"
              name={`discountByDuration.${index}.discount`}
              label="Discount"
            />
            <RemoveItem onClick={() => remove(index)} />
          </BoxCenter>
        );
      })}
    </GroupBg>
  );
};

export default GroupDiscountByDuration;
