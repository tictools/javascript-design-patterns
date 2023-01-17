import NodeCourse from "../NodeCourse/NodeCourse";

export default class Post extends NodeCourse {
  execute() {
    console.log(
      `Executing from an instance of ::${
        this.constructor.name
      }:: with name ${this.getName()}`
    );
    super.execute();
  }
}
