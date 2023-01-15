export interface ResourceOperations {
  getId: () => number;
  getName: () => string;
  execute: () => void;
}

export interface Compound {
  addResource: (resource: any) => void;
  getResources: () => any[];
  removeResource: (id: number) => void;
}
