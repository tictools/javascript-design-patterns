import { ElementOperations } from "../types";

export default abstract class ElementCourse implements ElementOperations {
  protected name: string;
  protected id: number;

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Date.now() * Math.random());
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  abstract execute(): void;
}
