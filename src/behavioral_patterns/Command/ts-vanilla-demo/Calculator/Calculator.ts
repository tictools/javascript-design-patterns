import {
  CalculatorActions,
  CommandOperations,
  HistoryCommands,
} from "../types";

export default class Calculator implements CalculatorActions {
  #total: number;
  #history: HistoryCommands;

  constructor(commandHistory: HistoryCommands) {
    this.#total = 0;
    this.#history = commandHistory;
  }

  executeCommand(command: CommandOperations) {
    this.#total = command.execute(this.#total);
    this.#history.push(command);
  }

  undo() {
    const command = this.#history.pop();
    if (command) {
      command.undo(this.#total);
    }
  }

  total() {
    return this.#total;
  }
}
