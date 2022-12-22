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
}

interface PostingLimits {
  from: string;
  to: string;
}

export interface Service {
  _id: string;
  icon: string;
  status: string;
  weight: number;
  text: Lang;
  costSuggestion?: number;
  discountByDuration: DiscountByDuration[];
  discountByDoneTask: DiscountByDoneTask[];
  city: City[];
  onlyShowTasker: boolean;
  name?: string;
  shortText: Lang;
  postingLimits: PostingLimits;
  defaultTaskTime: number;
}
