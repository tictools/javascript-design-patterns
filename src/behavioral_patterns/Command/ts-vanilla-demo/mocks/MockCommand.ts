import { CommandOperations } from "../types";

export default class MockCommand implements CommandOperations {
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
