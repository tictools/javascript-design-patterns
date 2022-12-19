export type PricesByModel = {
  model: string;
  baseCost: number;
};

export interface TeslaOptions {
  getDescription: () => string;
  cost: () => number;
}

export interface BaseCostCalculator {
  list: () => PricesByModel[];
  baseCost: (model: string) => number;
}
