import { Control } from "react-hook-form";

export type ControlHookForm = Control<any, any>;

interface Lang {
  vi: string;
  en: string;
  ko: string;
  th: string;
}

interface City {
  name: string;
  baseCost: number;
  district?: Array<{
    name: string;
    time: Array<{
      date: Date;
      endDate: Date;
      endTime: number;
      percent: number;
      startTime: number;
    }>;
  }>;
  specialTime?: Array<{
    formDate: Date;
    toDate: Date;
    percentage: number;
  }>;
}

interface CityServices {
  name: string;
  text: Lang;
  prices: {
    HPFrom: number;
    HPTo: number;
    price: number;
  };
  discountByQty: {
    qty: number;
    discount: number;
  };
}

interface TipRequirements {
  type: number;
  cost: number;
  applyForCities: string[];
  text: Lang;
}

interface SurgePriceTime {
  start: number;
  end: number;
  rate: number;
}

export interface Service {
  city: City[];
  costSuggestion?: number;
  defaultTaskTime: number;
  detail: any;
  discountByDuration: Array<{
    duration: number;
    discount: number;
  }>;
  discountByDoneTask: Array<{
    number: number;
    discount: number;
  }>;
  icon: string;
  limitDateOfBooking_Timestamp: {
    second: number;
    nanos: number;
  };
  name?: string;
  onlyShowTasker: boolean;
  pauseSetting: {
    content: Lang;
    isDisabled: boolean;
    title: Lang;
  };
  postingLimits: {
    from: string;
    to: string;
  };
  priceSetting: {
    costForChooseTasker: number;
    emergencyTaskWithin: number;
    feeForEmergencyTask: number;
    feeForWeekend: number;
    feeWeekendApplyForCity: string[];
    surgePriceTime: SurgePriceTime[];
  };
  shortText: Lang;
  status: string;
  text: Lang;
  tip: {
    requirements: TipRequirements[];
  };
  weight: number;
  _id: string;
  minutesPostTaskAfterNow: Number;
  minAvgRating: number;
  minTaskDone: number;
  serviceFeeLeaderTasker: number;
  isTesting: boolean;
  isNewService: boolean;
  requireTaskerVersion: string;
  limitDateOfBooking: Date;
  limitNumberAcceptTaskInDay: number;
  isSubscription: boolean;
  taskServiceId: string;
  maximumPSI: number;
  minTaskOfSubscription: number;
  requireAskerVersion: string;
  isOpenGoMarketDefault: boolean;
  linkContentInCar: string;
  minMoneyDeposite: number;
}

export interface TypeFormService extends Omit<Service, "_id"> {}
