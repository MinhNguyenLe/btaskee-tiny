import React, { PropsWithChildren } from "react";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import { Box, Tab, TabProps } from "@mui/material";
import { UseTabsReturn } from "../../hooks/useTabs";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export interface TabPanelBaseProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanelBase(props: TabPanelBaseProps) {
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

interface ListTabPanels extends Pick<TabPanelBaseProps, "children"> {}

interface TabPanelsBaseProps {
  listTabPanels: ListTabPanels[];
  value: number;
}

export function TabPanelsBase({ listTabPanels, value }: TabPanelsBaseProps) {
  return (
    <>
      {listTabPanels.map((tabPanel, index) => {
        return (
          <TabPanelBase key={index} value={value} index={index}>
            {tabPanel.children}
          </TabPanelBase>
        );
      })}
    </>
  );
}

export interface TabBaseProps extends TabProps {}

const TabBase = ({ ...props }: TabBaseProps) => {
  return <Tab {...props} />;
};

interface ListTabs extends Pick<TabBaseProps, "label"> {}

interface TabsBaseProps extends UseTabsReturn, Omit<TabsProps, "value"> {
  listTabs: ListTabs[];
}

const TabsBase = ({
  value,
  handleChange,
  children,
  listTabs,
  ...props
}: TabsBaseProps) => {
  return (
    <Tabs value={value} onChange={handleChange} {...props}>
      {listTabs.map((tab, index) => {
        return <TabBase key={index} label={tab.label} {...a11yProps(index)} />;
      })}
    </Tabs>
  );
};

export default TabsBase;
