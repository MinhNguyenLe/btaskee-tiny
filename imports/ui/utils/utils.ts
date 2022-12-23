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

export function meteorMethodCall(query, ...args) {
  return new Promise((resolve, reject) => {
    Meteor.call(query, ...args, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}
