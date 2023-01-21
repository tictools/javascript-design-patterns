import { PersonOperations } from "../types";

export default class MockPersonOperations implements PersonOperations {
  getFullName() {
    return "Full Name";
  }

  getAge() {
    return 1;
  }

  totalChildren() {
    return 2;
  }
}
