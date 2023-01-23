import { PersonOperations } from "../../../types";
import AbstractSorter from "../AbstractSorter";

export default class PersonNameSorter extends AbstractSorter<PersonOperations> {
  constructor() {
    super();
  }

  private nameSorter(elementA: PersonOperations, elementB: PersonOperations) {
    if (elementA.getFullName() < elementB.getFullName()) return -1;
    if (elementA.getFullName() > elementB.getFullName()) return 1;
    return 0;
  }

  public sort(collection: PersonOperations[]): PersonOperations[] {
    return [...collection].sort(this.nameSorter);
  }
}
