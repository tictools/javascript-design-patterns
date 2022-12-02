export interface CommandController {
  execute: (value: number) => number;
  undo: (value: number) => number;
}

export interface HistoryCommands {
  push: (command: CommandController) => void;
  pop: () => void;
  list: () => CommandController[];
}
