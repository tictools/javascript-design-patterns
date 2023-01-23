import Person from "../../domain/Person";
import AbstractSorter from "../../domain/Sorter/AbstractSorter";
import PersonNameSorter from "../../domain/Sorter/PersonNameSorter";
import { PersonOperations } from "../../types";

describe("given concrete class PersonNameSorter", () => {
  let personNameSorter: AbstractSorter<PersonOperations>;

  beforeEach(() => {
    personNameSorter = new PersonNameSorter();
  });
  describe("when an instance is created", () => {
    test("then method sort() should be defined", () => {
      expect(personNameSorter.sort).toBeDefined();
    });
  });

  describe("when method sort() is invoked", () => {
    const mockPerson1 = new Person("John", "Doe", 1, 1);
    const mockPerson2 = new Person("Ada", "Lovelace", 2, 2);
    const collection = [mockPerson1, mockPerson2];

    test("then private method nameSorter() should be called", () => {
      const spyOnNameSorter = jest.spyOn(
        PersonNameSorter.prototype as any,
        "nameSorter"
      );

      personNameSorter.sort(collection);
      expect(spyOnNameSorter).toHaveBeenCalledTimes(1);
    });

    test("then result should be sorted as expected", () => {
      const result = personNameSorter.sort(collection);
      expect(Array.isArray(result)).toBe(true);

      const [person1, person2] = result;
      expect(person1.getFullName()).toEqual("Ada Lovelace");
      expect(person2.getFullName()).toEqual("John Doe");
    });
  });
});
