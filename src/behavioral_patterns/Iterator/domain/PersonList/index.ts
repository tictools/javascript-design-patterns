import Person from "../Person";

export default class PersonList {
  private items: Person[];

  constructor(items: Person[]) {
    this.items = items;
  }

  listPersonItems(): void {
    for (let person of this.items) {
      console.log(person);
    }
  }
}
