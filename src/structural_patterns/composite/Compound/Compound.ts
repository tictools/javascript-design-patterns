import { ResourceOperations } from "../types";

export default class Compound implements ResourceOperations {
  private id: number;
  private name: string;
  private resources: any[];

  constructor(name: string) {
    this.id = Math.floor(Date.now() * Math.random());
    this.name = name;
    this.resources = [];
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }

  addResource(resource: any): void {
    this.resources.push(resource);
  }

  getResources(): any[] {
    return this.resources;
  }

  removeResource(id: number): void {
    this.resources = this.resources.filter((resource) => resource.id !== id);
  }

  execute(): void {
    console.log(
      `Executing from an instance of ::${
        this.constructor.name
      }:: with name ${this.getName()}`
    );
    for (let resource of this.resources) {
      resource.execute();
    }
  }
}
