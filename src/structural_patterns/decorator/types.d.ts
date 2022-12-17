export type PricesByModel = {
  model: string;
  baseCost: number;
};

export interface Options {
  getDescription: () => string;
  cost: () => number;
}

export interface BaseCostCalculator {
  list: () => PricesByModel[];
  baseCost: (model: string) => number;
}
