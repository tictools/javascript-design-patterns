import { CommandOperations, HistoryCommands } from "../types";
import MockCommand from "./MockCommand";

export default class MockhistoryCommand implements HistoryCommands {
  push(command: CommandOperations) {
    console.log("push");
  }

  pop() {
    return new MockCommand(0);
  }

  list() {
    return [new MockCommand(0)];
  }
}
