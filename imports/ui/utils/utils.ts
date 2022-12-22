interface ConvertWithCurrency {
  cost: number;
  currency: Intl.LocalesArgument;
}

export const convertWithCurrency = ({
  cost,
  currency,
}: ConvertWithCurrency): string => {
  return `${cost.toLocaleString(currency)} VND`;
};
