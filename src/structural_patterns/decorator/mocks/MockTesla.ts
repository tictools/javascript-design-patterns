import { TeslaOptions } from "../types";

class MockTesla implements TeslaOptions {
  getDescription() {
    return "Tesla Model description";
  }
  cost() {
    return 100;
  }
}

export default MockTesla;
