import React, { useCallback } from "react";
import { UseDialogReturn } from "../../hooks/useDialog";
import DialogBase from "../../mui-base/Dialog/DialogBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import customHooks from "../../hooks";
import { Service, TypeFormService } from "../../../utils/types";
import FormService from "../FormService";
import { useFormContext } from "react-hook-form";
import { preFetchDetailService } from "../../hooks/useGetServiceDetail";
import { preFetchListServices } from "../../hooks/useGetListServices";
import ServiceDetail from "../ServiceDetail";
export interface DialogServiceDetailProps
  extends Omit<UseDialogReturn, "onOpenDialog"> {
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

  const { reset, getValues } = useFormContext<TypeFormService>();

  const { isLoading: isLoadingDetailData, data: serviceDetail } =
    customHooks.useFormService({
      idService,
    });

  const { mutate: mutateUpdate, isLoading: isUpdating } =
    customHooks.useUpdateService({
      onSuccess: async () => {
        reset();
        await preFetchDetailService(idService);
        await preFetchListServices();

        onCloseDialog();
      },
    });

  const { mutate: deleteService, isLoading: isDeleting } =
    customHooks.useDeleteService({
      idService,
      onSuccess: async () => {
        onCloseDialog();
        reset();

        await preFetchListServices();
      },
    });

  const content = (
    <Box sx={{ width: "100%" }}>
      <TabPanel value={value} index={0}>
        <ServiceDetail serviceDetail={serviceDetail} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormService />
      </TabPanel>
    </Box>
  );

  const onCloseDialogServiceDetail = useCallback(() => {
    onCloseDialog();
    reset();
  }, []);

  return (
    <DialogBase
      open={open}
      onCloseDialog={onCloseDialogServiceDetail}
      titleHeader={
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
      }
      content={
        isLoadingDetailData || isUpdating || isDeleting ? (
          <>Loading ...</>
        ) : (
          content
        )
      }
      maxWidth="lg"
      fullWidth
      onDelete={deleteService}
      onSave={() => mutateUpdate({ idService, data: getValues() })}
    />
  );
};

export default DialogServiceDetail;
