import { TeslaOptions } from "../types";

abstract class TeslaDecorator implements TeslaOptions {
  abstract getDescription(): string;
  abstract cost(): number;
}

export default TeslaDecorator;
