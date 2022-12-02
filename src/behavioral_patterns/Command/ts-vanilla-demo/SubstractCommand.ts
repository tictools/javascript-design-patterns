import { CommandController } from "./types";

export default class SubstractCommand implements CommandController {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  execute(currentValue: number): number {
    return currentValue - this.#value;
  }

  undo(currentValue: number): number {
    return currentValue + this.#value;
  }
}
