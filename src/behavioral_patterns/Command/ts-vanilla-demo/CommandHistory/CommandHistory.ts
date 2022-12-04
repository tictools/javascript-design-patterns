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
    const command = this.#history.pop();
    return command;
  }

  list() {
    return this.#history;
  }
}
