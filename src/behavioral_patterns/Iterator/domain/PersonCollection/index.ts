import PersonIterator from "../../iterator/PersonIterator";
import {
  CollectionIterator,
  CollectionOperations,
  ItemIterator,
  PersonOperations,
} from "../../types";
import PersonAgeSorter from "../Sorter/PersonAgeSorter";
import PersonChildrenSorter from "../Sorter/PersonChildrenSorter";
import PersonNameSorter from "../Sorter/PersonNameSorter";

export default class PersonCollection
  implements CollectionOperations<PersonOperations>, CollectionIterator
{
  private items: PersonOperations[];

  constructor(items: PersonOperations[]) {
    this.items = items;
  }

  getItems(): PersonOperations[] {
    return this.items;
  }

  listItems() {
    for (let person of this.items) {
      console.log(person);
    }
  }

  createSortByNameIterator(direction: string): ItemIterator {
    const nameSorter = new PersonNameSorter();
    return new PersonIterator(this.getItems(), direction, nameSorter);
  }

  createSortByAgeIterator(direction: string): ItemIterator {
    const ageSorter = new PersonAgeSorter();
    return new PersonIterator(this.getItems(), direction, ageSorter);
  }

  createSortByChildrenIterator(direction: string): ItemIterator {
    const childrenSorter = new PersonChildrenSorter();
    return new PersonIterator(this.getItems(), direction, childrenSorter);
  }
}
