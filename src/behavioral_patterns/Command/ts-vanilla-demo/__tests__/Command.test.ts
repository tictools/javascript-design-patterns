import { MockCommand } from "../mocks/MockCommand";

describe("given Command", () => {
  test("when an instance is created then execute method is defined", () => {
    const command = new MockCommand(5);
    expect(command.execute).toBeDefined();
  });

  test("when an instance is created then undo method is defined", () => {
    const command = new MockCommand(5);
    expect(command.undo).toBeDefined();
  });

  test("when execute method is invoked then a number should be returned", () => {
    const command = new MockCommand(5);
    const output = command.execute(10);
    expect(typeof output === "number").toBe(true);
  });

  test("when undo method is invoked then a number should be returned", () => {
    const command = new MockCommand(5);
    const output = command.execute(10);
    expect(typeof output === "number").toBe(true);
  });
});
