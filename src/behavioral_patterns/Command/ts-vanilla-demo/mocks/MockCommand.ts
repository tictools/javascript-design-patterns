import { CommandController } from "../types";

export default class MockCommand implements CommandController {
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