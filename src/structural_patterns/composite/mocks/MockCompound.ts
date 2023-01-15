import { Resource } from "../types";

export default class MockCompound implements Resource {
  private resources: any[];
  private name: string;
  private id: number;

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Date.now() * Math.random());
    this.resources = [];
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getResources(): any[] {
    return this.resources;
  }

  addResource(resource: any) {
    console.log(`Adding from Compound`);
    this.resources.push(resource);
  }

  removeResource(id: number) {
    console.log(`Removing from Compound`);
    this.resources = this.resources.filter((resource) => resource.id !== id);
  }

  execute() {
    console.log(`Executing from Compound...`);
    for (let resource of this.resources) {
      resource.execute();
    }
  }
}
