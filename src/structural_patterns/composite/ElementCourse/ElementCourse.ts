import { ElementOperations } from "../types";

export default abstract class ElementCourse implements ElementOperations {
  protected name: string;
  protected id: number;

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Date.now() * Math.random());
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  execute() {
    console.log(`Method execute() invoked from element ${this.getName()}`);
  }
}

// import { ElementOperations } from "../types";

// export default class Resource implements ElementOperations {
//   private name: string;
//   private id: number;

//   constructor(name: string) {
//     this.id = Math.floor(Date.now() * Math.random());
//     this.name = name;
//   }

//   getId(): number {
//     return this.id;
//   }

//   getName(): string {
//     return this.name;
//   }

//   execute() {
//     console.log(
//       `Executing from an instance of ::${
//         this.constructor.name
//       }:: with name ${this.getName()}`
//     );
//   }
// }
