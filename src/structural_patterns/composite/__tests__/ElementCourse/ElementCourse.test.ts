import MockElementCourse from "../../mocks/MockElementCourse";
import { ElementOperations } from "../../types";

describe("given a class Resource", () => {
  describe("when an instance is created", () => {
    let resource: ElementOperations;

    beforeEach(() => {
      resource = new MockElementCourse("resource");
    });

    test("then method 'getId()' should be defined", () => {
      expect(resource.getId).toBeDefined();
    });

    test("then method 'getName()' should be defined", () => {
      expect(resource.getName).toBeDefined();
    });

    test("then method 'execute()' should be defined", () => {
      expect(resource.execute).toBeDefined();
    });
  });

  describe("when method", () => {
    let resource: ElementOperations;

    beforeEach(() => {
      resource = new MockElementCourse("RESOURCE");
    });

    test("'getId()' is called then expected id should be returned", () => {
      const id = resource.getId();
      expect(typeof id).toBe("number");
      expect(id).toEqual(123);
    });

    test("'getName()' is called then expected name should be returned", () => {
      const name = resource.getName();
      expect(name).toEqual("RESOURCE");
    });

    test("'execute()' is called then expected array should be returned", () => {
      const spyOnLog = jest.spyOn(globalThis.console, "log");
      resource.execute();
      expect(spyOnLog).toHaveBeenCalledWith(
        "Executing from mocked Resource..."
      );
    });
  });
});
