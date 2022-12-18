import { BaseCostCalculator, TeslaOptions } from "../types";

class Tesla implements TeslaOptions {
  private baseCostCalculator: BaseCostCalculator;
  private amount: number;
  private model: string;

  constructor(model: string, baseCostCalculator: BaseCostCalculator) {
    this.model = model;
    this.baseCostCalculator = baseCostCalculator;
    this.amount = this.baseCostCalculator.baseCost(this.model);
  }

  getDescription() {
    const BASE_MODEL_DESCRIPTION = "Tesla Model";
    return `${BASE_MODEL_DESCRIPTION} ${this.model}`;
  }

  cost() {
    return this.amount;
  }
}

export default Tesla;
