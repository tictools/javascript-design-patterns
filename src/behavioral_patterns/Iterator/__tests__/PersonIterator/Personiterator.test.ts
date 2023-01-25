import Person from "../../domain/Person";
import PersonCollection from "../../domain/PersonCollection";
import PersonIterator from "../../iterator/PersonIterator";
import MockPersonIterator from "../../mocks/MockPersonIterator";
import MockSorter from "../../mocks/MockSorter";
import { ItemIterator } from "../../types";

describe("given a class PersonIterator", () => {
  describe("when a mocked instance is created", () => {
    let personIterator: ItemIterator;

    beforeEach(() => {
      personIterator = new MockPersonIterator();
    });

    test("then method next() should be defined", () => {
      expect(personIterator.next).toBeDefined();
    });

    test("then method hasNext() should be defined", () => {
      expect(personIterator.hasNext).toBeDefined();
    });
  });

  describe("when a real instance is created", () => {
    const mockPerson1 = new Person("John", "Doe", 20, 1);
    const mockPerson2 = new Person("Ada", "Lovelace", 25, 2);
    const mockPerson3 = new Person("Alan", "Turing", 30, 3);

    let mockedSorter: MockSorter;

    beforeEach(() => {
      mockedSorter = new MockSorter();
    });

    test("and sort direction is 'ASC' then items should be iterated as expected ", () => {
      const collection = new PersonCollection([
        mockPerson1,
        mockPerson2,
        mockPerson3,
      ]);
      const items = collection.getItems();
      const sortDirection = "ASC";

      const personIterator = new PersonIterator(
        items,
        sortDirection,
        mockedSorter
      );
      let index: number = 0;

      while (personIterator.hasNext() === true) {
        const person = personIterator.next();
        expect(person).toEqual(items[index]);
        index++;
      }
    });

    test("and sort direction is 'DESC' then items should be iterated as expected ", () => {
      const collection = new PersonCollection([
        mockPerson1,
        mockPerson2,
        mockPerson3,
      ]);
      const items = collection.getItems().reverse();
      const sortDirection = "DESC";

      const personIterator = new PersonIterator(
        items,
        sortDirection,
        mockedSorter
      );
      let index: number = 0;

      while (personIterator.hasNext() === true) {
        const person = personIterator.next();
        expect(person).toEqual(items[index]);
        index++;
      }
    });
  });
});
