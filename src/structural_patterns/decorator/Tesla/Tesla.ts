import { BaseCostCalculator, TeslaOperations, TeslaOptions } from "../types";

class Tesla implements TeslaOptions, TeslaOperations {
  private baseCostCalculator: BaseCostCalculator;
  private baseAmount: number;
  private amount: number;
  private model: string;

  constructor(model: string, baseCostCalculator: BaseCostCalculator) {
    this.model = model;
    this.baseCostCalculator = baseCostCalculator;
    this.baseAmount = this.baseCostCalculator.baseCost(this.model);
    this.amount = this.baseAmount;
  }

  getDescription() {
    const BASE_MODEL_DESCRIPTION = "Tesla Model";
    return `${BASE_MODEL_DESCRIPTION} ${this.model}`;
  }

  baseCost() {
    return this.baseAmount;
  }

  private updateCost(qtty: number) {
    this.amount = this.amount + qtty;
  }

  cost(qtty: number) {
    this.updateCost(qtty);
    return this.amount;
  }
}

export default Tesla;
