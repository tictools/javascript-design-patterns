import { CommandOperations, HistoryCommands } from "../types";

export default class CommandHistory implements HistoryCommands {
  #history: CommandOperations[];
  constructor() {
    this.#history = [];
  }

  push(command: CommandOperations) {
    this.#history.push(command);
  }

  pop() {
    this.#history.pop();
  }

  list() {
    return this.#history;
  }
}
