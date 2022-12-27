import React from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useFormService from "../../hooks/useFormService";
import { Service, TypeFormService } from "../../utils/types";
import FormService from "../Form/FormService/FormService";
import useUpdateService from "../../hooks/useUpdateService";
import { useFormContext } from "react-hook-form";
export interface DialogServiceDetailProps extends UseDialogReturn {
  idService: Service["_id"];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DialogServiceDetail = ({
  open,
  onCloseDialog,
  idService,
}: DialogServiceDetailProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { isLoading, reset } = useFormService({ idService });

  const methods = useFormContext<TypeFormService>();

  const { mutate: mutateUpdate, isLoading: isUpdating } = useUpdateService({
    onSuccess: () => {
      onCloseDialog();
      methods.reset();
    },
  });

  const content = (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Service's detail" {...a11yProps(0)} />
          <Tab label="Edit information" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FormService />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormService />
      </TabPanel>
    </Box>
  );

  const onCloseDialogServiceDetail = () => {
    onCloseDialog();
    // reset();
  };

  return (
    <DialogBase
      open={open}
      onCloseDialog={onCloseDialogServiceDetail}
      title="Service's detail"
      content={isLoading || isUpdating ? <>Loading ...</> : content}
      maxWidth="md"
      onSave={() => mutateUpdate({ idService, data: methods.getValues() })}
    />
  );
};

export default DialogServiceDetail;
