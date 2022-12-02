import { CommandController } from "./types";

export default class AddCommand implements CommandController {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  execute(currentValue: number) {
    return currentValue + this.#value;
  }

  undo(currentValue: number) {
    return currentValue - this.#value;
  }
}
