import MockResource from "../../mocks/MockResource";
import { Resource } from "../../types";

describe("given a class Resource", () => {
  describe("when an instance is created", () => {
    let resource: Resource;

    beforeEach(() => {
      resource = new MockResource("resource");
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
    let resource = new MockResource("POST");

    beforeEach(() => {
      resource = new MockResource("RESOURCE");
    });

    test("'getName()' is called then expected name should be returned", () => {
      const id = resource.getId();
      expect(typeof id).toBe("number");
    });

    test("'getName()' is called then expected name should be returned", () => {
      const name = resource.getName();
      expect(name).toEqual("RESOURCE");
    });

    test("'execute()' is called then expected array should be returned", () => {
      const spyOnLog = jest.spyOn(globalThis.console, "log");
      resource.execute();
      expect(spyOnLog).toHaveBeenCalledWith("Executing from Resource...");
    });
  });
});
