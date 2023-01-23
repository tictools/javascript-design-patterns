import { PersonOperations } from "../../../types";
import AbstractSorter from "../AbstractSorter";

export default class PersonChildrenSorter extends AbstractSorter<PersonOperations> {
  constructor() {
    super();
  }

  private childrenSorter(
    elementA: PersonOperations,
    elementB: PersonOperations
  ) {
    return elementA.totalChildren() - elementB.totalChildren();
  }

  public sort(collection: PersonOperations[]): PersonOperations[] {
    return [...collection].sort(this.childrenSorter);
  }
}
