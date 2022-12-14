import Calculator from "../../Calculator/Calculator";
import MockCommand from "../../mocks/MockCommand";
import MockHistoryCommand from "../../mocks/MockHistoryCommand";
import { CommandOperations } from "../../types";

describe("given class Calculator", () => {
  let spyOnExecute: jest.SpyInstance<number, [value: number]>;
  let spyOnPushHistory: jest.SpyInstance<void, [command: CommandOperations]>;
  let spyOnPopHistory: jest.SpyInstance<MockCommand, []>;

  beforeEach(() => {
    spyOnExecute = jest.spyOn(MockCommand.prototype, "execute");
    spyOnPushHistory = jest.spyOn(MockHistoryCommand.prototype, "push");
    spyOnPopHistory = jest.spyOn(MockHistoryCommand.prototype, "pop");
  });

  test("when an instance is create then method executeCommand() is defined", () => {
    const mockedHistory = new MockHistoryCommand();
    const calculator = new Calculator(mockedHistory);
    expect(calculator.executeCommand).toBeDefined();
  });

  test("when an instance is create then method undo() is defined", () => {
    const mockedHistory = new MockHistoryCommand();
    const calculator = new Calculator(mockedHistory);
    expect(calculator.undo).toBeDefined();
  });

  test("when an instance is create then method total() is defined", () => {
    const mockedHistory = new MockHistoryCommand();
    const calculator = new Calculator(mockedHistory);
    expect(calculator.total).toBeDefined();
  });

  test("when executeCommand method is invoked then methods are called as expected", () => {
    const mockedHistory = new MockHistoryCommand();
    const calculator = new Calculator(mockedHistory);

    calculator.executeCommand(new MockCommand(0));
    expect(spyOnExecute).toHaveBeenCalledTimes(1);
    expect(spyOnPushHistory).toHaveBeenCalledTimes(1);
  });

  test("when undo method is invoked then methods are called as expected", () => {
    const mockedHistory = new MockHistoryCommand();
    const calculator = new Calculator(mockedHistory);

    calculator.undo();
    expect(spyOnPopHistory).toHaveBeenCalledTimes(1);
  });

  test("when total() method is invoked then total is returned as expected", () => {
    const mockedHistory = new MockHistoryCommand();
    const calculator = new Calculator(mockedHistory);

    calculator.executeCommand(new MockCommand(1));
    const executeTotal = calculator.total();
    expect(executeTotal).toEqual(1);
  });
});
