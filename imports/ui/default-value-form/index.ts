import { TypeFormService } from "../utils/types";

export const defaultValueServiceCollection: TypeFormService = {
  city: [
    {
      name: "",
      baseCost: 10,
      district: [
        {
          name: "Quan Btaskee",
          time: [
            {
              date: new Date(),
              endDate: new Date(),
              endTime: 0,
              percent: 0,
              startTime: 0,
            },
          ],
        },
      ],
    },
  ],
  costSuggestion: 1,
  defaultTaskTime: 2,
  discountByDuration: [
    {
      duration: 0,
      discount: 0,
    },
  ],
  discountByDoneTask: [
    {
      number: 0,
      discount: 0,
    },
  ],
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
    feeWeekendApplyForCity: [""],
    surgePriceTime: [
      {
        start: 0,
        end: 0,
        rate: 0,
      },
    ],
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
    requirements: [
      {
        type: 0,
        cost: 0,
        applyForCities: [""],
        text: {
          vi: "",
          en: "",
          th: "",
          ko: "",
        },
      },
    ],
  },
  weight: 2,
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
};
