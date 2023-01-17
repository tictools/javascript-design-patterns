import ElementCourse from "../ElementCourse/ElementCourse";

export default class MockElementCourse extends ElementCourse {
  constructor(name: string) {
    super(name);
  }

  getId() {
    return 123;
  }

  getName(): string {
    return this.name;
  }

  execute() {
    console.log("Executing from mocked Resource...");
  }
}
