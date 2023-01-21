import Person from "../../domain/Person";
import AbstractSorter from "../../domain/Sorter/AbstractSorter";
import PersonAgeSorter from "../../domain/Sorter/PersonAgeSorter";
import { PersonOperations } from "../../types";

describe("given concrete class PersonAgeSorter", () => {
  let personAgeSorter: AbstractSorter<PersonOperations>;

  beforeEach(() => {
    personAgeSorter = new PersonAgeSorter();
  });
  describe("when an instance is created", () => {
    test("then method sort() should be defined", () => {
      expect(personAgeSorter.sort).toBeDefined();
    });
  });

  describe("when method sort() is invoked", () => {
    const mockPerson1 = new Person("John", "Doe", 20, 1);
    const mockPerson2 = new Person("Ada", "Lovelace", 25, 2);
    const collection = [mockPerson1, mockPerson2];
    test("then private method nameSorter() should be called", () => {
      const spyOnNameSorter = jest.spyOn(
        PersonAgeSorter.prototype as any,
        "ageSorter"
      );

      personAgeSorter.sort(collection);
      expect(spyOnNameSorter).toHaveBeenCalledTimes(1);
      expect;
    });

    test("then result should be sorted as expected", () => {
      const result = personAgeSorter.sort(collection);
      expect(Array.isArray(result)).toBe(true);

      const [person1, person2] = result;
      expect(person1.getAge()).toEqual(20);
      expect(person2.getAge()).toEqual(25);
    });
  });
});
