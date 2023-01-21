import Person from "../../Person";
import AbstractSorter from "../AbstractSorter";

export default class PersonChildrenSorter extends AbstractSorter<Person> {
  constructor() {
    super();
  }

  private childrenSorter(elementA: Person, elementB: Person) {
    return elementA.totalChildren() - elementB.totalChildren();
  }

  public sort(collection: Person[]): Person[] {
    return [...collection].sort(this.childrenSorter);
  }
}
