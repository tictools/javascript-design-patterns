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
    this.items = nameSorter.sort(this.getItems());
    return new PersonIterator(this, direction);
  }

  createSortByAgeIterator(direction: string): ItemIterator {
    const ageSorter = new PersonAgeSorter();
    this.items = ageSorter.sort(this.getItems());
    return new PersonIterator(this, direction);
  }

  createSortByChildrenIterator(direction: string): ItemIterator {
    const childrenSorter = new PersonChildrenSorter();
    this.items = childrenSorter.sort(this.getItems());
    return new PersonIterator(this, direction);
  }
}
