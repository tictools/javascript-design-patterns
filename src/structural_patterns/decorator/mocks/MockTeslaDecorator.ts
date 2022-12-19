import { TeslaOptions } from "../types";

class MockTeslaDecorator implements TeslaOptions {
  wrappee: TeslaOptions;

  constructor(wrappee: TeslaOptions) {
    this.wrappee = wrappee;
  }

  getDescription() {
    const wrappeeDescription = this.wrappee.getDescription();
    return `${wrappeeDescription} has been decorated`;
  }
  cost() {
    return this.wrappee.cost() + 50;
  }
}

export default MockTeslaDecorator;
