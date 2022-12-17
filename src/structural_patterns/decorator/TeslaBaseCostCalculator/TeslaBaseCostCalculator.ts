import { BASE_PRICES_BY_MODEL } from "../constants";
import { BaseCostCalculator, PricesByModel } from "../types";

class TeslaBaseCostCalculator implements BaseCostCalculator {
  private basePricesByModel: PricesByModel[];
  private model: string;

  constructor(model: string) {
    this.model = model;
    this.basePricesByModel = BASE_PRICES_BY_MODEL;
  }

  list() {
    return this.basePricesByModel;
  }

  baseCost() {
    const [requestedModel] = BASE_PRICES_BY_MODEL.filter(
      (item) => item.model === this.model
    );
    return requestedModel.baseCost;
  }
}

export default TeslaBaseCostCalculator;
