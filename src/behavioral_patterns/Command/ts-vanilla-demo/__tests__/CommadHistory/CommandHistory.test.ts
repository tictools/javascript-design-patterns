import CommandHistory from "../../CommandHistory";
import MockCommand from "../../mocks/MockCommand";
import { CommandController } from "../../types";

describe("given HistoryCommand", () => {
  let command: CommandController;

  beforeEach(() => {
    command = new MockCommand(5);
  });

  test("when an instance is created then push method is defined", () => {
    const history = new CommandHistory();
    expect(history.push).toBeDefined();
  });

  test("when an instance is created then undo method is defined", () => {
    const history = new CommandHistory();
    expect(history.pop).toBeDefined();
  });

  test("when method push and pop are invoked then list is updated as expected", () => {
    const history = new CommandHistory();
    history.push(command);
    const commandsHistoryAfterPush = history.list();
    expect(commandsHistoryAfterPush).toHaveLength(1);

    history.pop();
    const commandsHistoryAfterPop = history.list();
    expect(commandsHistoryAfterPop).toHaveLength(0);
  });
});
