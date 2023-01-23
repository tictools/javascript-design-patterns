import Person from "../../domain/Person";
import PersonCollection from "../../domain/PersonCollection";
import PersonIterator from "../../iterator/PersonIterator";
import MockPersonIterator from "../../mocks/MockPersonIterator";
import { ItemIterator } from "../../types";

describe("given a class PersonIterator", () => {
  describe("when a mocked instance is created", () => {
    let personIterator: ItemIterator;

    beforeEach(() => {
      personIterator = new MockPersonIterator();
    });

    test("then method prev() should be defined", () => {
      expect(personIterator.prev).toBeDefined();
    });

    test("then method next() should be defined", () => {
      expect(personIterator.next).toBeDefined();
    });

    test("then method done() should be defined", () => {
      expect(personIterator.done).toBeDefined();
    });
  });

  describe("when a real instance is created", () => {
    const mockPerson1 = new Person("John", "Doe", 20, 1);
    const mockPerson2 = new Person("Ada", "Lovelace", 25, 2);
    const mockPerson3 = new Person("Alan", "Turing", 30, 3);

    const collection = new PersonCollection([
      mockPerson1,
      mockPerson2,
      mockPerson3,
    ]);

    let personIterator: MockPersonIterator;

    beforeEach(() => {});

    test("and sort direction is 'ASC' then items should be iterated as expected ", () => {
      const sortDirection = "ASC";
      const personIterator = new PersonIterator(collection, sortDirection);
      let index: number = 0;

      while (personIterator.done() === false) {
        const person = personIterator.next();
        expect(person).toEqual(collection.getItems()[index]);
        index++;
      }
    });

    test("and sort direction is 'DESC' then items should be iterated as expected ", () => {
      const sortDirection = "DESC";
      const personIterator = new PersonIterator(collection, sortDirection);
      let index: number = collection.getItems().length - 1;

      while (personIterator.done() === false) {
        const person = personIterator.next();
        expect(person).toEqual(collection.getItems()[index]);
        index--;
      }
    });

    test("and sort direction is 'ASC' then prev() and next() methods should iterate collection as expected  ", () => {
      const sortDirection = "ASC";
      const personIterator = new PersonIterator(collection, sortDirection);

      const firstPerson = personIterator.next();
      expect(firstPerson?.getFullName()).toEqual("John Doe");

      const nextPerson = personIterator.next();
      expect(nextPerson?.getFullName()).toEqual("Ada Lovelace");

      const prevPerson = personIterator.prev();
      expect(prevPerson?.getFullName()).toEqual("John Doe");
    });

    test("and sort direction is 'DESC' then prev() and next() methods should iterate collection as expected  ", () => {
      const sortDirection = "DESC";
      const personIterator = new PersonIterator(collection, sortDirection);

      const firstPerson = personIterator.next();
      expect(firstPerson?.getFullName()).toEqual("Alan Turing");

      const nextPerson = personIterator.next();
      expect(nextPerson?.getFullName()).toEqual("Ada Lovelace");

      const prevPerson = personIterator.prev();
      expect(prevPerson?.getFullName()).toEqual("Alan Turing");
    });
  });
});
