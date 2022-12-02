export interface CommandController {
  execute: (value: number) => number;
  undo: (value: number) => number;
}
