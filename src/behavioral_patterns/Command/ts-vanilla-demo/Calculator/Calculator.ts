import { HistoryCommands } from "../types";

export default class Calculator {
  #total: number;
  #history: HistoryCommands[];

  constructor(commandHistory: HistoryCommands[]) {
    this.#total = 0;
    this.#history = commandHistory;
  }
}
