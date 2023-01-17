import MockElementCourse from "../../mocks/MockElementCourse";
import MockNodeCourse from "../../mocks/MockNodeCourse";
import { ElementOperations } from "../../types";

describe("given MockNodeCourse class", () => {
  describe("when an instance is created", () => {
    test("then method 'getId()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.getId).toBeDefined();
    });

    test("then method 'getName()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.getName).toBeDefined();
    });

    test("then method 'getResources()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.getResources).toBeDefined();
    });

    test("then method 'removeResource()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.removeResource).toBeDefined();
    });

    test("then method 'execute()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.execute).toBeDefined();
    });
  });

  describe("when method", () => {
    let node: MockNodeCourse;
    let resource: ElementOperations;

    beforeEach(() => {
      node = new MockNodeCourse("PODCAST");
      resource = new MockElementCourse("POST");
    });

    test("'getName()' is called then expected name should be returned", () => {
      const name = node.getName();
      expect(name).toEqual("PODCAST");
    });

    test("'getID()' is called then expected value should be returned", () => {
      const id = node.getId();
      expect(id).toEqual(123);
    });

    test("'execute()' is called then expected array should be returned", () => {
      const spyOnResourceExecute: jest.SpyInstance<void, []> = jest.spyOn(
        resource,
        "execute"
      );
      node.addResource(resource);
      node.execute();
      expect(spyOnResourceExecute).toHaveBeenCalled();
    });

    test("'getResources()' is called after adding one resource then expected array should be returned", () => {
      node.addResource(resource);
      const resources = node.getResources();
      expect(resources).toHaveLength(1);

      const [firstResource] = resources;
      expect(firstResource.getName()).toEqual("POST");
    });

    test("'getResources()' is called after adding and removing one resource then expected array should be returned", () => {
      node.addResource(resource);

      const resources = node.getResources();
      expect(resources).toHaveLength(1);

      const [firstResource] = resources;
      const resourceId = firstResource.getId();

      node.removeResource(resourceId);
      expect(node.getResources()).toHaveLength(0);
    });
  });
});
