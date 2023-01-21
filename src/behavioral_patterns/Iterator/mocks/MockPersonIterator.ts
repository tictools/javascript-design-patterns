import { ItemIterator, PersonOperations } from "../types";
import MockPerson from "./MockPerson";

export default class MockPersonIterator implements ItemIterator {
  prev(): PersonOperations | undefined {
    if (!this.done()) {
      return new MockPerson();
    }
  }

  next(): PersonOperations | undefined {
    if (!this.done()) {
      return new MockPerson();
    }
  }

  done(): boolean {
    return true;
  }
}
