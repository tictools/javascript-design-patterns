import ElementCourse from "../ElementCourse/ElementCourse";

export default abstract class NodeCourse extends ElementCourse {
  protected children: ElementCourse[];

  constructor(name: string) {
    super(name);
    this.children = [];
  }

  execute() {
    console.log(
      `Executing from an instance of ::${
        this.constructor.name
      }:: with name ${this.getName()}`
    );
    for (let element of this.children) {
      element.execute();
    }
  }
}
