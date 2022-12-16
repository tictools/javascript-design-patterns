export interface CommandOperations {
  execute: (value: number) => number;
  undo: (value: number) => number;
}

export interface CalculatorActions {
  executeCommand: (command: CommandController) => void;
  undo: () => void;
  total: () => number;
}

export interface HistoryCommands {
  push: (command: CommandOperations) => void;
  pop: () => CommandOperations | undefined;
  list: () => CommandOperations[];
}
