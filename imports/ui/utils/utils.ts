import { Service, TypeFormService } from "./types";

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
      console.log(result, "---------------------------", query);
      if (error) reject(error);
      else resolve(result);
    });
  });
}

export const isActive = (status: any) => {
  if (typeof status !== "string") return false;

  return status.toLowerCase() === "active";
};

/**
 *
 * @param customField
 * {
 *  [key]: json
 * }
 * ->
 * [{
 *  key:string,
 *  value: json
 * }]
 */
export const mapCustomFieldForClient = (
  customFieldServer: Service["customField"]
) => {
  if (!customFieldServer) {
    return [];
  }

  const customFieldClient: TypeFormService["customField"] = [];
  Object.entries(customFieldServer).forEach((pair) => {
    customFieldClient.push({
      key: pair[0],
      value: pair[1],
    });
  });

  return customFieldClient;
};

export const mapCustomFieldForServer = (
  customFieldClient: TypeFormService["customField"]
) => {
  if (!customFieldClient) {
    return {};
  }

  const customFieldServer = {};
  customFieldClient.forEach((pair) => {
    customFieldServer[pair.key] = pair.value;
  });

  return customFieldServer;
};

// export const deepCheckValid = (object: any) => {
//   if (!object || typeof object !== "object") {
//     throw new Error("what the heo");
//   }

//   Object.keys(object).forEach();
// };
