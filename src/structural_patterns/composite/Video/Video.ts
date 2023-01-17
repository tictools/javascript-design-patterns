import ElementCourse from "../ElementCourse/ElementCourse";

export default class Video extends ElementCourse {
  execute() {
    console.log(
      `Method execute() invoked from video element with name ${this.getName()}`
    );
  }
}
