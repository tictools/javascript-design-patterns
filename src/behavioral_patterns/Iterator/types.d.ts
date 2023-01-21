export interface PersonOperations {
  getFullName: () => string;
  getAge: () => number;
  totalChildren: () => number;
}

export interface CollectionOperations<T> {
  getItems: () => Array<T>;
  listItems: () => void;
}

export interface ItemIterator {
  prev: () => PersonOperations | undefined;
  next: () => PersonOperations | undefined;
  done: () => boolean;
}

export interface CollectionIterator {
  createSortByNameIterator: (direction: number) => ItemIterator;
  createSortByAgeIterator: (direction: number) => ItemIterator;
  createSortByChildrenIterator: (direction: number) => ItemIterator;
}
