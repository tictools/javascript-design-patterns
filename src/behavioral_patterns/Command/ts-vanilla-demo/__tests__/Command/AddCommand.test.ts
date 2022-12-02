import AddCommand from "../../AddCommand";

describe("given Command", () => {
  test("when execute method is invoked then expected output should be returned", () => {
    const INNER_VALUE = 5;
    const OUTER_VALUE = 10;

    const command = new AddCommand(INNER_VALUE);
    const output = command.execute(OUTER_VALUE);
    expect(output).toEqual(OUTER_VALUE + INNER_VALUE);
  });

  test("when undo method is invoked then expected output should be returned", () => {
    const INNER_VALUE = 20;
    const OUTER_VALUE = 10;

    const command = new AddCommand(INNER_VALUE);
    const output = command.undo(OUTER_VALUE);
    expect(output).toEqual(OUTER_VALUE - INNER_VALUE);
  });
});
