import { BASE_PRICES_BY_MODEL } from "../constants";
import { BaseCostCalculator, PricesByModel } from "../types";

class TeslaBaseCostCalculator implements BaseCostCalculator {
  private basePricesByModel: PricesByModel[];

  constructor() {
    this.basePricesByModel = BASE_PRICES_BY_MODEL;
  }

  list() {
    return this.basePricesByModel;
  }

  baseCost(model: string) {
    const [requestedModel] = BASE_PRICES_BY_MODEL.filter(
      (item) => item.model === model
    );
    return requestedModel.baseCost;
  }
}

export default TeslaBaseCostCalculator;
