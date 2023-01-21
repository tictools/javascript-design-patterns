import { PersonOperations } from "../types";

export default class MockPerson implements PersonOperations {
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
