import Person from "../../domain/Person";
import MockPerson from "../../mocks/MockPerson";

describe("given class Person", () => {
  describe("when an instance is created", () => {
    let person = new MockPerson();
    test("then method getFullName() should be defined", () => {
      expect(person.getFullName).toBeDefined();
    });

    test("then method getAge() should be defined", () => {
      expect(person.getAge).toBeDefined();
    });

    test("then method totalChildren() should be defined", () => {
      expect(person.totalChildren).toBeDefined();
    });
  });

  describe("when method", () => {
    let person = new Person("John", "Doe", 28, 2);
    test("getFullName() is called then expected result should be returned", () => {
      const fullName = person.getFullName();
      expect(fullName).toEqual("John Doe");
    });

    test("getAge() is called then expected result should be returned", () => {
      const age = person.getAge();
      expect(age).toEqual(28);
    });

    test("totalChildren() is called then expected result should be returned", () => {
      const children = person.totalChildren();
      expect(children).toEqual(2);
    });
  });
});
