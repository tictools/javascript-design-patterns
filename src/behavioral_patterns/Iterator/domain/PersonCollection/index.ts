import PersonIterator from "../../iterator/Iterator";
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

  createSortByNameIterator(direction: number): ItemIterator {
    const nameSorter = new PersonNameSorter();
    return new PersonIterator(this, nameSorter, direction);
  }

  createSortByAgeIterator(direction: number): ItemIterator {
    const ageSorter = new PersonAgeSorter();
    return new PersonIterator(this, ageSorter, direction);
  }

  createSortByChildrenIterator(direction: number): ItemIterator {
    const childrenSorter = new PersonChildrenSorter();
    return new PersonIterator(this, childrenSorter, direction);
  }
}
