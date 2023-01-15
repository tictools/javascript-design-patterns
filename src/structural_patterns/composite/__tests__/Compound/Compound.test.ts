import MockCompound from "../../mocks/MockCompound";
import MockResource from "../../mocks/MockResource";

describe("given MockCompoundResource class", () => {
  describe("when an instance is created", () => {
    test("then method 'getId()' is defined", () => {
      const compound = new MockCompound("resource");
      expect(compound.getId).toBeDefined();
    });

    test("then method 'getName()' is defined", () => {
      const compound = new MockCompound("resource");
      expect(compound.getName).toBeDefined();
    });

    test("then method 'getResources()' is defined", () => {
      const compound = new MockCompound("resource");
      expect(compound.getResources).toBeDefined();
    });

    test("then method 'removeResource()' is defined", () => {
      const compound = new MockCompound("resource");
      expect(compound.removeResource).toBeDefined();
    });

    test("then method 'execute()' is defined", () => {
      const compound = new MockCompound("resource");
      expect(compound.execute).toBeDefined();
    });
  });

  describe("when method", () => {
    let compound = new MockCompound("compound");
    let resource = new MockResource("POST");

    beforeEach(() => {
      compound = new MockCompound("COMPOUND");
      resource = new MockResource("RESOURCE");
    });

    test("'getName()' is called then expected name should be returned", () => {
      const name = compound.getName();
      expect(name).toEqual("COMPOUND");
    });

    test("'getName()' is called then expected name should be returned", () => {
      const name = compound.getName();
      expect(name).toEqual("COMPOUND");
    });

    test("'getResources()' is called after adding one resource then expected array should be returned", () => {
      compound.addResource(resource);
      const resources = compound.getResources();
      expect(resources).toHaveLength(1);

      const [firstResource] = resources;
      expect(firstResource.getName()).toEqual("RESOURCE");
    });

    test("'execute()' is called then expected array should be returned", () => {
      const spyOnResourceExecute: jest.SpyInstance<void, []> = jest.spyOn(
        resource,
        "execute"
      );
      compound.addResource(resource);
      compound.execute();
      expect(spyOnResourceExecute).toHaveBeenCalled();
    });

    test("'getResources()' is called after adding and  removing one resource then expected array should be returned", () => {
      compound.addResource(resource);

      const resources = compound.getResources();
      expect(resources).toHaveLength(1);

      const [firstResource] = resources;
      const resourceId = firstResource.getId();

      compound.removeResource(resourceId);
      expect(compound.getResources()).toHaveLength(0);
    });
  });
});
