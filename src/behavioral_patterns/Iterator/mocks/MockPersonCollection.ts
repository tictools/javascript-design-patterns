import { CollectionIterator, CollectionOperations } from "../types";
import MockPersonIterator from "./MockPersonIterator";

export default class MockPersonCollection
  implements CollectionOperations<string>, CollectionIterator
{
  getItems(): string[] {
    return [];
  }

  listItems(): void {
    console.log("items listed");
  }

  createSortByNameIterator(direction: string): MockPersonIterator {
    console.log({ direction });
    return new MockPersonIterator();
  }

  createSortByAgeIterator(direction: string): MockPersonIterator {
    console.log({ direction });
    return new MockPersonIterator();
  }

  createSortByChildrenIterator(direction: string): MockPersonIterator {
    console.log({ direction });
    return new MockPersonIterator();
  }
}
