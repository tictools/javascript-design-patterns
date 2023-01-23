import AbstractSorter from "../domain/Sorter/AbstractSorter";

export default class MockSorter extends AbstractSorter<string> {
  constructor() {
    super();
  }

  sort(collection: string[]) {
    return collection;
  }
}
