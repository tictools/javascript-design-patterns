export interface CommandOperations {
  execute: (value: number) => number;
  undo: (value: number) => number;
}

export interface CalculatorActions {
  executeCommand: (command: CommandController) => void;
  undo: () => void;
}

export interface HistoryCommands {
  push: (command: CommandOperations) => void;
  pop: () => CommandOperations | undefined;
}

export interface ListActions {
  list: () => CommandOperations[];
}
