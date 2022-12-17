export type PricesByModel = {
  model: string;
  baseCost: number;
};

export interface Options {
  getDescription: () => string;
  cost: (qtty: number) => number;
}

export interface TeslaOperations {
  baseCost: () => number;
  #updateCost: (qtty: number) => void;
}

export interface BaseCostCalculator {
  list: () => PricesByModel[];
  baseCost: (model: string) => number;
}
