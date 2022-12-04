import Calculator from "./Calculator/Calculator";
import AddCommand from "./Command/AddCommand";
import SubstractCommand from "./Command/SubstractCommand";
import CommandHistory from "./CommandHistory/CommandHistory";

let result;

const history = new CommandHistory();
const calculator = new Calculator(history);

calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new AddCommand(5));
calculator.executeCommand(new AddCommand(3));
calculator.executeCommand(new AddCommand(2));
calculator.executeCommand(new SubstractCommand(5));
result = calculator.total();
console.log({ result });

calculator.undo();
result = calculator.total();
console.log({ result });

calculator.undo();
result = calculator.total();
console.log({ result });

calculator.undo();
result = calculator.total();
console.log({ result });

calculator.undo();
result = calculator.total();
console.log({ result });

calculator.undo();
result = calculator.total();
console.log({ result });
