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

    test("then method 'appendChild()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.appendChild).toBeDefined();
    });

    test("then method 'removeChild()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.removeChild).toBeDefined();
    });

    test("then method 'listChildren()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.listChildren).toBeDefined();
    });

    test("then method 'execute()' is defined", () => {
      const node = new MockNodeCourse("resource");
      expect(node.execute).toBeDefined();
    });
  });

  describe("when method", () => {
    let node: MockNodeCourse;
    let child: ElementOperations;

    beforeEach(() => {
      node = new MockNodeCourse("PODCAST");
      child = new MockElementCourse("POST");
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
        child,
        "execute"
      );
      node.appendChild(child);
      node.execute();
      expect(spyOnResourceExecute).toHaveBeenCalled();
    });

    test("'listChildren()' is called after adding one child then expected array should be returned", () => {
      node.appendChild(child);
      const resources = node.listChildren();
      expect(resources).toHaveLength(1);

      const [firstResource] = resources;
      expect(firstResource.getName()).toEqual("POST");
    });

    test("'listChildren()' is called after adding and removing one child then expected array should be returned", () => {
      node.appendChild(child);

      const resources = node.listChildren();
      expect(resources).toHaveLength(1);

      const [firstResource] = resources;
      const resourceId = firstResource.getId();

      node.removeChild(resourceId);
      expect(node.listChildren()).toHaveLength(0);
    });
  });
});
