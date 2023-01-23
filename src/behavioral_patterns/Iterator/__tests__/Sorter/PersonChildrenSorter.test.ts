import Person from "../../domain/Person";
import AbstractSorter from "../../domain/Sorter/AbstractSorter";
import PersonChildrenSorter from "../../domain/Sorter/PersonChildrenSorter";
import { PersonOperations } from "../../types";

describe("given concrete class PersonChildrenSorter", () => {
  let personChildrenSorter: AbstractSorter<PersonOperations>;

  beforeEach(() => {
    personChildrenSorter = new PersonChildrenSorter();
  });
  describe("when an instance is created", () => {
    test("then method sort() should be defined", () => {
      expect(personChildrenSorter.sort).toBeDefined();
    });
  });

  describe("when method sort() is invoked", () => {
    const mockPerson1 = new Person("John", "Doe", 1, 2);
    const mockPerson2 = new Person("Ada", "Lovelace", 2, 1);
    const collection = [mockPerson1, mockPerson2];

    test("then private method nameSorter() should be called", () => {
      const spyOnNameSorter = jest.spyOn(
        PersonChildrenSorter.prototype as any,
        "childrenSorter"
      );

      personChildrenSorter.sort(collection);
      expect(spyOnNameSorter).toHaveBeenCalledTimes(1);
    });

    test("then result should be sorted as expected", () => {
      const result = personChildrenSorter.sort(collection);
      expect(Array.isArray(result)).toBe(true);

      const [person1, person2] = result;
      expect(person1.totalChildren()).toEqual(1);
      expect(person2.totalChildren()).toEqual(2);
    });
  });
});
