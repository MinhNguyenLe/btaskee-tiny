import React from "react";

export interface UseTabsReturn {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function useTabs(): UseTabsReturn {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return { value, handleChange };
}

export default useTabs;
