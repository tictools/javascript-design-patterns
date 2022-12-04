import { CommandOperations } from "../types";

export default class MockCommand implements CommandOperations {
  #value: number;

  constructor(value: number) {
    this.#value = value;
  }

  execute(value: number) {
    return value;
  }

  undo(value: number) {
    return value;
  }
}
