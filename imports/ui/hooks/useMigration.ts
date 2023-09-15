import { meteorMethodCall } from "../../utils/utils";

const useMigration = () => {
  function fetch(...args: any) {
    return meteorMethodCall("services.migration", ...args).then((result) => {
      console.log(result, "services.migration");
    });
  }
  return { fetch };
};

export default useMigration;
