export interface CommandOperations {
  execute: (value: number) => number;
  undo: (value: number) => number;
}

export interface HistoryCommands {
  push: (command: CommandOperations) => void;
  pop: () => void;
  list: () => CommandOperations[];
}
