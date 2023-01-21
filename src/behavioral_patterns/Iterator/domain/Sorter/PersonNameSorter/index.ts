import Person from "../../Person";
import AbstractSorter from "../AbstractSorter";

export default class PersonNameSorter extends AbstractSorter<Person> {
  constructor() {
    super();
  }

  private nameSorter(elementA: Person, elementB: Person) {
    if (elementA.getFullName() < elementB.getFullName()) return -1;
    if (elementA.getFullName() > elementB.getFullName()) return 1;
    return 0;
  }

  public sort(collection: Person[]): Person[] {
    return [...collection].sort(this.nameSorter);
  }
}
