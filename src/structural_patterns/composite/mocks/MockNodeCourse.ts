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

  appendChild(child: ElementOperations) {
    console.log(`Adding child into NodeCourse`);
    this.children.push(child);
  }

  removeChild(id: number) {
    console.log(`Removing child from NodeCourse`);
    this.children = this.children.filter((child) => child.getId() !== id);
  }

  listChildren(): ElementOperations[] {
    return this.children;
  }

  execute() {
    console.log(`Executing from NodeCourse...`);
    for (let child of this.children) {
      child.execute();
    }
  }
}
