import { BASE_PRICES_BY_OPTION } from "../constants";
import { TeslaOptions } from "../types";
import TeslaDecorator from "./TeslaDecorator";

class TeslaAutoPilotDecorator extends TeslaDecorator {
  constructor(wrappee: TeslaOptions) {
    super(wrappee);
  }

  getDescription() {
    const wrappeeDescription = this.wrappee.getDescription();
    return `${wrappeeDescription} + ${BASE_PRICES_BY_OPTION.AUTOPILOT.LABEL}`;
  }

  cost(): number {
    return this.wrappee.cost() + BASE_PRICES_BY_OPTION.AUTOPILOT.COST;
  }
}

export default TeslaAutoPilotDecorator;
