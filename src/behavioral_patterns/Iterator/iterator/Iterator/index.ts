import {
  CollectionOperations,
  ItemIterator,
  PersonOperations,
} from "../../types";

const SORT_DIRECTION = {
  ASC: "ascending",
  DESC: "descending",
};

export default class PersonIterator implements ItemIterator {
  private items: PersonOperations[];
  private direction: string;
  private currentPosition: number;
  private cache: PersonOperations[];

  constructor(
    collection: CollectionOperations<PersonOperations>,
    sortDirection: number
  ) {
    this.items = collection.getItems();
    this.cache = this.items;
    this.direction = sortDirection ? SORT_DIRECTION.ASC : SORT_DIRECTION.DESC;
    this.currentPosition = this.setInitialPosition();
  }

  lazyInit(): void {
    !this.cache.length && (this.cache = this.items);
  }

  setInitialPosition() {
    return this.direction === SORT_DIRECTION.ASC ? -1 : this.items.length;
  }

  prev() {
    if (!this.done()) {
      return this.direction === SORT_DIRECTION.ASC
        ? this.cache[--this.currentPosition]
        : this.cache[++this.currentPosition];
    }
  }

  next() {
    if (!this.done()) {
      return this.direction === SORT_DIRECTION.ASC
        ? this.cache[++this.currentPosition]
        : this.cache[--this.currentPosition];
    }
  }

  done() {
    this.lazyInit();
    return this.direction === SORT_DIRECTION.ASC
      ? this.currentPosition >= this.cache.length - 1
      : this.currentPosition <= 0;
  }
}
