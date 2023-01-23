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
  hasNext: () => boolean;
}

export interface CollectionIterator {
  createSortByNameIterator: (direction: string) => ItemIterator;
  createSortByAgeIterator: (direction: string) => ItemIterator;
  createSortByChildrenIterator: (direction: string) => ItemIterator;
}
