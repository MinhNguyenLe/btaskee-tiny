interface Lang {
  vi: string;
  en: string;
  ko: string;
  th: string;
}

interface DiscountByDuration {
  duration: number;
  discount: number;
}

interface DiscountByDoneTask {
  number: number;
  discount: number;
}

interface City {
  name: string;
  baseCost: number;
  district: {
    name: string;
    time: {
      date: Date;
      endDate: Date;
      endTime: number;
      percent: number;
      startTime: number;
    };
  };
  specialTime: {
    formDate: Date;
    toDate: Date;
    percentage: number;
  };
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

interface CityDetail {
  name: string;
  type: Array<{
    name: string;
    text: Lang;
    services: CityServices;
  }>;
}

export interface Service {
  city: City[];
  costSuggestion?: number;
  defaultTaskTime: number;
  detail: {
    city: CityDetail[];
  };
  discountByDuration: DiscountByDuration[];
  discountByDoneTask: DiscountByDoneTask[];
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
}

export interface FormService {
  icon: string;
  status: string;
  onlyShowTasker: boolean;
  name?: string;
  costSuggestion?: number;
}
