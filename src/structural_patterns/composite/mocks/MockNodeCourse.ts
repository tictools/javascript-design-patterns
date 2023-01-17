import NodeCourse from "../NodeCourse/NodeCourse";
import { ElementOperations } from "../types";

export default class MockNodeCourse extends NodeCourse {
  constructor(name: string) {
    super(name);
  }

  getId(): number {
    return 123;
  }

  getName(): string {
    return this.name;
  }

  getResources(): ElementOperations[] {
    return this.children;
  }

  addResource(resource: any) {
    console.log(`Adding from Compound`);
    this.children.push(resource);
  }

  removeResource(id: number) {
    console.log(`Removing from Compound`);
    this.children = this.children.filter((child) => child.getId() !== id);
  }

  execute() {
    console.log(`Executing from Compound...`);
    for (let child of this.children) {
      child.execute();
    }
  }
}
