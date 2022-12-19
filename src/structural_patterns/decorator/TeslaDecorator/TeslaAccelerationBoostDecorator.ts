import { BASE_PRICES_BY_OPTION } from "../constants";
import { TeslaOptions } from "../types";
import TeslaDecorator from "./TeslaDecorator";

class TeslaAccelerationBoostDecorator
  extends TeslaDecorator
  implements TeslaOptions
{
  wrappee: TeslaOptions;

  constructor(wrappee: TeslaOptions) {
    super();
    this.wrappee = wrappee;
  }

  getDescription() {
    const wrappeeDescription = this.wrappee.getDescription();
    return `${wrappeeDescription} + ${BASE_PRICES_BY_OPTION.AUTOPILOT.LABEL}`;
  }

  cost(): number {
    return this.wrappee.cost() + BASE_PRICES_BY_OPTION.AUTOPILOT.COST;
  }
}

export default TeslaAccelerationBoostDecorator;
