export interface Resource {
  getId: () => number;
  getName: () => string;
  execute: () => void;
}

export interface Compound {
  addResource: (resource: ItemType) => void;
  removeResource: (resource: ItemType) => void;
}
