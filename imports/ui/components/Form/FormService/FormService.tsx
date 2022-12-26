import React from "react";
import { Box } from "@mui/material";

import { useFormContext } from "react-hook-form";

import { TypeFormService } from "../../../utils/types";
import TextFieldControl from "../../../hook-form/TextFieldControl";
import GroupServiceContent from "./GroupServiceContent";
import CheckboxControl from "../../../hook-form/CheckboxControl";
import { isActive } from "../../../utils/utils";
import GroupDiscountByDuration from "./GroupDiscountByDuration";
import GroupDiscountByDoneTask from "./GroupDiscountByDoneTask";
import BoxCenter from "../../Grid/BoxCenter";
import GroupCity from "./GroupCity";

const FormService = () => {
  const { control } = useFormContext<TypeFormService>();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "20ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <TextFieldControl
          control={control}
          variant="standard"
          name="costSuggestion"
          type="number"
          label="Cost suggestion"
        />
        <TextFieldControl
          control={control}
          variant="standard"
          name="defaultTaskTime"
          type="number"
          label="DefaultTask Time"
        />
        <TextFieldControl
          variant="standard"
          control={control}
          name="icon"
          label="Icon"
        />
        <TextFieldControl
          // InputProps={{
          //   readOnly: true,
          // }}
          variant="standard"
          control={control}
          name="name"
          label="Service's name"
        />
        {/* <TextFieldControl
          control={control}
          variant="standard"
          name="weight"
          type="number"
          label="Weight(order)"
        /> */}
      </Box>
      <Box>
        <CheckboxControl
          control={control}
          name="onlyShowTasker"
          label="Only show tasker"
        />
        <CheckboxControl
          logicChecked={isActive}
          control={control}
          name="status"
          label="Active"
        />
      </Box>
      <GroupServiceContent
        control={control}
        title="Text:"
        groupData={[
          { name: "text.vi", label: "Vietnamese" },
          { name: "text.en", label: "English" },
          { name: "text.ko", label: "Korea" },
          { name: "text.th", label: "Thailand" },
        ]}
      />
      <GroupCity control={control} />
      <GroupDiscountByDuration control={control} />
      <GroupDiscountByDoneTask control={control} />
    </Box>
  );
};

export default FormService;
