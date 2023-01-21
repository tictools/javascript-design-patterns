import {
  CollectionOperations,
  ItemIterator,
  PersonOperations,
} from "../../types";

const SORT_DIRECTION = {
  ASC: "ascending",
  DESC: "descending",
};

type SortDirectionKeys = keyof typeof SORT_DIRECTION;

export default class PersonIterator implements ItemIterator {
  private items: PersonOperations[];
  private direction: string;
  private currentPosition: number;
  private cache: PersonOperations[];

  constructor(
    collection: CollectionOperations<PersonOperations>,
    sortDirection: string
  ) {
    this.items = collection.getItems();
    this.cache = this.items;
    this.direction =
      SORT_DIRECTION[sortDirection as SortDirectionKeys] || SORT_DIRECTION.ASC;
    this.currentPosition = this.setInitialPosition();
  }

  private lazyInit(): void {
    !this.cache.length && (this.cache = this.items);
  }

  private setInitialPosition() {
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
