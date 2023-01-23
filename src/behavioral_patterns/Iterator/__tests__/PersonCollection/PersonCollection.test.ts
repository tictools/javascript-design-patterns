import MockPersonCollection from "../../mocks/MockPersonCollection";

describe("given class PersonCollection", () => {
  describe("when an instance is created", () => {
    let personCollection = new MockPersonCollection();
    test("then method getItems() should be defined and should return expected value type", () => {
      expect(personCollection.getItems).toBeDefined();
      expect(Array.isArray(personCollection.getItems())).toBe(true);
    });

    test("then method listItems() should be defined and should return expected value type", () => {
      const spyOnLog = jest.spyOn(globalThis.console, "log");
      expect(personCollection.listItems).toBeDefined();

      personCollection.listItems();
      expect(spyOnLog).toHaveBeenCalledWith("items listed");
    });

    test("then method createSortByNameIterator() should be defined and should return expected value type", () => {
      expect(personCollection.createSortByNameIterator).toBeDefined();

      const result = personCollection.createSortByNameIterator("ASC");
      expect(result.constructor.name).toEqual("MockPersonIterator");
    });

    test("then method createSortByAgeIterator() should be defined and should return expected value type", () => {
      expect(personCollection.createSortByAgeIterator).toBeDefined();

      const result = personCollection.createSortByNameIterator("ASC");
      expect(result.constructor.name).toEqual("MockPersonIterator");
    });

    test("then method createSortByChildrenIterator() should be defined and should return expected value type", () => {
      expect(personCollection.createSortByChildrenIterator).toBeDefined();

      const result = personCollection.createSortByNameIterator("ASC");
      expect(result.constructor.name).toEqual("MockPersonIterator");
    });
  });
});
