import { BaseCostCalculator, PricesByModel } from "../types";

class MockTeslaBaseCostCalculator implements BaseCostCalculator {
  list(): PricesByModel[] {
    return [{ model: "AAA", baseCost: 100 }];
  }
  baseCost() {
    return 100;
  }
}

export default MockTeslaBaseCostCalculator;
