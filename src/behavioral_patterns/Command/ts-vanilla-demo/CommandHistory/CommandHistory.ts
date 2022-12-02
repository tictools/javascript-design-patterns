import { CommandController, HistoryCommands } from "../types";

export default class CommandHistory implements HistoryCommands {
  #history: CommandController[];
  constructor() {
    this.#history = [];
  }

  push(command: CommandController) {
    this.#history.push(command);
  }

  pop() {
    this.#history.pop();
  }

  list() {
    return this.#history;
  }
}
