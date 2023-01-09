import React from "react";
import { useFormContext } from "react-hook-form";
import CheckboxControl from "../../hook-form/CheckboxControl";
import TextFieldControl from "../../hook-form/TextFieldControl";
import TypographyBase from "../../mui-base/Typography/TypographyBase";
import { ControlHookForm, TypeFormService } from "../../../utils/types";
import BoxCenter from "../base/Grid/BoxCenter";
import AddItem from "./AddItem";
import BoxChild from "./BoxChild";
import GroupBg from "./GroupBg";
import GroupLang from "./GroupLang";
import RemoveItem from "./RemoveItem";

interface PauseSettingProps {
  control: ControlHookForm;
}

const PauseSetting = ({ control }: PauseSettingProps) => {
  const {} = useFormContext<TypeFormService>();

  return (
    <GroupBg>
      <TypographyBase title="Pause setting" color="primary"></TypographyBase>
      <CheckboxControl
        control={control}
        name="pauseSetting.isDisabled"
        label="Disabled"
      />
      <BoxCenter>
        <BoxChild>
          <GroupLang
            control={control}
            title="Content:"
            namePrefix="pauseSetting.content"
          />
          <GroupLang
            control={control}
            title="Title:"
            namePrefix="pauseSetting.title"
          />
        </BoxChild>
      </BoxCenter>
    </GroupBg>
  );
};

export default PauseSetting;
