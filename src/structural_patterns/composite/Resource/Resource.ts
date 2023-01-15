import { ResourceOperations } from "../types";

export default class Resource implements ResourceOperations {
  private name: string;
  private id: number;

  constructor(name: string) {
    this.id = Math.floor(Date.now() * Math.random());
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  execute() {
    console.log(
      `Executing from an instance of ::${
        this.constructor.name
      }:: with name ${this.getName()}`
    );
  }
}
