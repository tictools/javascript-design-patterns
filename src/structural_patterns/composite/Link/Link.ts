import ElementCourse from "../ElementCourse/ElementCourse";

export default class Link extends ElementCourse {
  execute() {
    console.log(
      `Method execute() invoked from link element with name ${this.getName()}`
    );
  }
}
