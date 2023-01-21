import PersonIterator from "../../iterator/Iterator";
import {
  CollectionIterator,
  CollectionOperations,
  ItemIterator,
} from "../../types";
import Person from "../Person";
import PersonAgeSorter from "../Sorter/PersonAgeSorter";
import PersonChildrenSorter from "../Sorter/PersonChildrenSorter";
import PersonNameSorter from "../Sorter/PersonNameSorter";

export default class PersonCollection
  implements CollectionOperations<Person>, CollectionIterator
{
  private items: Person[];

  constructor(items: Person[]) {
    this.items = items;
  }

  getItems(): Person[] {
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
