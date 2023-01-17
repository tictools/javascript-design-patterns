import ElementCourse from "../ElementCourse/ElementCourse";
import { ElementOperations } from "../types";

export default abstract class NodeCourse extends ElementCourse {
  protected children: ElementOperations[];

  constructor(name: string) {
    super(name);
    this.children = [];
  }

  appendChild(child: ElementOperations) {
    this.children.push(child);
  }

  removeChild(id: number) {
    this.children = this.children.filter((child) => child.getId() !== id);
  }

  listChildren(): ElementOperations[] {
    return this.children;
  }

  execute() {
    for (let child of this.children) {
      child.execute();
    }
  }
}
