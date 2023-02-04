import AbstractSorter from "../../domain/Sorter/AbstractSorter";
import { ItemIterator, PersonOperations } from "../../types";

const SORT_DIRECTION = {
  ASC: "ASC",
  DESC: "DESC",
};

export default class PersonIterator implements ItemIterator {
  private items: PersonOperations[];
  private cache: PersonOperations[];
  private currentPosition: number;

  constructor(
    items: PersonOperations[],
    sortDirection: string,
    sorter: AbstractSorter<PersonOperations>
  ) {
    this.items =
      sortDirection === SORT_DIRECTION.ASC
        ? sorter.sort(items)
        : sorter.sort(items).reverse();
    this.cache = [];
    this.currentPosition = 0;
  }

  private lazyInit(): void {
    !this.cache.length && (this.cache = this.items);
  }

  next() {
    if (this.hasNext()) {
      return this.cache[this.currentPosition++];
    }
  }

  hasNext() {
    this.lazyInit();
    return (
      this.currentPosition >= 0 && this.currentPosition <= this.cache.length - 1
    );
  }
}
