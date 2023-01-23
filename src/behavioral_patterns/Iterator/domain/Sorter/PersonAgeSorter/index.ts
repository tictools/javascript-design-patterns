import { PersonOperations } from "../../../types";
import AbstractSorter from "../AbstractSorter";

export default class PersonAgeSorter extends AbstractSorter<PersonOperations> {
  constructor() {
    super();
  }

  private ageSorter(elementA: PersonOperations, elementB: PersonOperations) {
    return elementA.getAge() - elementB.getAge();
  }

  public sort(collection: PersonOperations[]): PersonOperations[] {
    return [...collection].sort(this.ageSorter);
  }
}
