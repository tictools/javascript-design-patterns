export default class Person {
  private name: string;
  private surname: string;
  private age: number;
  private childrens: number;

  constructor(name: string, surname: string, age: number, childrens: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.childrens = childrens;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getAge() {
    return this.age;
  }

  numOfChildren() {
    return this.childrens;
  }
}
