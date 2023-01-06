import React, { PropsWithChildren } from "react";
import { FormProvider, FormProviderProps, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AllTheProvidersProps extends Partial<FormProviderProps> {}

const queryClient = new QueryClient();

const AllTheProviders = ({
  children,
  ...props
}: PropsWithChildren<AllTheProvidersProps>) => {
  const formMethods = useForm();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <FormProvider {...formMethods} {...props}>
          {children}
        </FormProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default AllTheProviders;
