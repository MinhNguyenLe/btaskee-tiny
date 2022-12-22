import Typography from "@mui/material/Typography";
import React from "react";
import { UseDialogReturn } from "../hooks/useDialog";
import DialogBase from "../mui-base/Dialog/DialogBase";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface DialogServiceDetailProps extends UseDialogReturn {}

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const DialogServiceDetail = ({
  open,
  onCloseDialog,
  onOpenDialog,
}: DialogServiceDetailProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const content = (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Detail
      </TabPanel>
      <TabPanel value={value} index={1}>
        Update
      </TabPanel>
    </Box>
  );

  return (
    <DialogBase
      open={open}
      onOpenDialog={onOpenDialog}
      onCloseDialog={onCloseDialog}
      title="Service's detail"
      content={content}
    />
  );
};

export default DialogServiceDetail;
