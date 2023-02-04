import { ItemIterator, PersonOperations } from "../types";
import MockPerson from "./MockPerson";

export default class MockPersonIterator implements ItemIterator {
  next(): PersonOperations | undefined {
    if (!this.hasNext()) {
      return new MockPerson();
    }
  }

  hasNext(): boolean {
    return true;
  }
}
