import { BASE_PRICES_BY_OPTION } from "../constants";
import { TeslaOptions } from "../types";
import TeslaDecorator from "./TeslaDecorator";

class TeslaAccelerationBoostDecorator extends TeslaDecorator {
  constructor(wrappee: TeslaOptions) {
    super(wrappee);
  }

  getDescription() {
    const wrappeeDescription = this.wrappee.getDescription();
    return `${wrappeeDescription} + ${BASE_PRICES_BY_OPTION.ACCELERATION_BOOST.LABEL}`;
  }

  cost() {
    return this.wrappee.cost() + BASE_PRICES_BY_OPTION.ACCELERATION_BOOST.COST;
  }
}

export default TeslaAccelerationBoostDecorator;
