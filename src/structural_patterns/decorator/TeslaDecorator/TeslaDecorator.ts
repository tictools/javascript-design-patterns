import { TeslaOptions } from "../types";

abstract class TeslaDecorator implements TeslaOptions {
  protected wrappee: TeslaOptions;

  constructor(wrappee: TeslaOptions) {
    this.wrappee = wrappee;
  }

  abstract getDescription(): string;
  abstract cost(): number;
}

export default TeslaDecorator;
