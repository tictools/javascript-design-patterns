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
    this.items = nameSorter.sort(this.getItems());
    return new PersonIterator(this, direction);
  }

  createSortByAgeIterator(direction: number): ItemIterator {
    const ageSorter = new PersonAgeSorter();
    this.items = ageSorter.sort(this.getItems());
    return new PersonIterator(this, direction);
  }

  createSortByChildrenIterator(direction: number): ItemIterator {
    const childrenSorter = new PersonChildrenSorter();
    this.items = childrenSorter.sort(this.getItems());
    return new PersonIterator(this, direction);
  }
}
