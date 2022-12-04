import Calculator from "./Calculator/Calculator";
import CommandHistory from "./CommandHistory/CommandHistory";

const history = new CommandHistory();
const calculator = new Calculator(history);
