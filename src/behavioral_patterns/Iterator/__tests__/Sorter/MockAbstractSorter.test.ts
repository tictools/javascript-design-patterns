import AbstractSorter from "../../domain/Sorter/AbstractSorter";
import MockSorter from "../../mocks/MockSorter";

describe("given class AbstractSorter", () => {
  let sorter: AbstractSorter<string>;
  const collection = ["foo", "bar", "fizz", "buzz"];

  beforeEach(() => {
    sorter = new MockSorter();
  });

  describe("when an instance of a concrete class is created", () => {
    test("then method 'sort()' is defined", () => {
      expect(sorter.sort).toBeDefined();
    });

    test("and method 'sort()' is called then array should be returned", () => {
      const result = sorter.sort(collection);
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
