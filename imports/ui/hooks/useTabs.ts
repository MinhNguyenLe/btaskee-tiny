import React from "react";

export interface UseTabsReturn {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  resetTab: () => void;
}

function useTabs(): UseTabsReturn {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const resetTab = () => setValue(0);
  return { resetTab, value, handleChange };
}

export default useTabs;
