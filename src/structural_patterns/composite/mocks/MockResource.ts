import { Resource } from "../types";

export default class MockResource implements Resource {
  private name: string;
  private id: number;

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Date.now() * Math.random());
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  execute() {
    console.log("Executing from Resource...");
  }
}
