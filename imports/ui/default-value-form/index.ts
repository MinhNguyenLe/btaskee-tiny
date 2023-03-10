import { TypeFormService } from "../../utils/types";

export const defaultCityDistrict = {
  name: "",
  time: [],
};

export const defaultCity = {
  name: "",
  baseCost: 0,
  district: [],
};

export const defaultDiscountByDuration = {
  duration: 0,
  discount: 0,
};

export const defaultDiscountByDoneTask = {
  number: 0,
  discount: 0,
};

export const defaultCustomField = {};

export const defaultTipRequirement = {
  type: 0,
  cost: 0,
  applyForCities: [],
  text: {
    vi: "",
    en: "",
    th: "",
    ko: "",
  },
};

export const defaultValueServiceCollection: TypeFormService = {
  city: [
    {
      name: "",
      baseCost: 0,
      district: [],
    },
  ],
  costSuggestion: 0,
  defaultTaskTime: 0,
  discountByDuration: [],
  discountByDoneTask: [],
  icon: "",
  limitDateOfBooking_Timestamp: {
    second: 0,
    nanos: 0,
  },
  name: "",
  onlyShowTasker: true,
  pauseSetting: {
    content: {
      vi: "",
      en: "",
      th: "",
      ko: "",
    },
    isDisabled: false,
    title: {
      vi: "",
      en: "",
      th: "",
      ko: "",
    },
  },
  postingLimits: {
    from: "",
    to: "",
  },
  priceSetting: {
    costForChooseTasker: 0,
    emergencyTaskWithin: 0,
    feeForEmergencyTask: 0,
    feeForWeekend: 0,
    feeWeekendApplyForCity: [],
    surgePriceTime: [],
  },
  shortText: {
    vi: "",
    en: "",
    th: "",
    ko: "",
  },
  status: "ACTIVE",
  text: {
    vi: "",
    en: "",
    th: "",
    ko: "",
  },
  tip: {
    requirements: [],
  },
  minutesPostTaskAfterNow: 0,
  minAvgRating: 0,
  minTaskDone: 0,
  serviceFeeLeaderTasker: 0,
  isTesting: false,
  isNewService: false,
  requireTaskerVersion: "",
  limitDateOfBooking: new Date(),
  limitNumberAcceptTaskInDay: 0,
  isSubscription: false,
  taskServiceId: "",
  maximumPSI: 0,
  minTaskOfSubscription: 0,
  requireAskerVersion: "",
  isOpenGoMarketDefault: false,
  linkContentInCar: "",
  minMoneyDeposite: 0,
  detail: {},
  customField: [],
};
