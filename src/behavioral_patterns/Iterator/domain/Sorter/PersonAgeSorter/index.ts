import Person from "../../Person";
import AbstractSorter from "../AbstractSorter";

export default class PersonAgeSorter extends AbstractSorter<Person> {
  constructor() {
    super();
  }

  private ageSorter(elementA: Person, elementB: Person) {
    return elementA.getAge() - elementB.getAge();
  }

  public sort(collection: Person[]): Person[] {
    return [...collection].sort(this.ageSorter);
  }
}
