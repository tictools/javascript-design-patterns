import Person from "../domain/Person";
import AbstractSorter from "../domain/Sorter/AbstractSorter";

export default class MockSorter extends AbstractSorter<Person> {
  constructor() {
    super();
  }

  sort(collection: Person[]) {
    return collection;
  }
}
