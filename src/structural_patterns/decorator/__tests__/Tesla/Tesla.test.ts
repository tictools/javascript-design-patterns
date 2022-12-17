import MockTeslaBaseCostCalculator from "../../mocks/MockTeslaBaseCostCalculator";
import Tesla from "../../Tesla/Tesla";
import { BaseCostCalculator } from "../../types";

describe("given class tesla", () => {
  let baseCostCalculator: BaseCostCalculator;

  beforeEach(() => {
    baseCostCalculator = new MockTeslaBaseCostCalculator();
  });
  test("when an instance is created then expected methods should be defined", () => {
    const tesla = new Tesla("3", baseCostCalculator);
    expect(tesla.getDescription).toBeDefined();
    expect(tesla.baseCost).toBeDefined();
    expect(tesla.cost).toBeDefined();
  });

  test("when an instance is created with expected arguments then expected description should be defined", () => {
    const tesla = new Tesla("X", baseCostCalculator);
    const description = tesla.getDescription();
    expect(description).toEqual("Tesla Model X");
  });

  test("when an instance is created then method 'baseCost' should return expected base cost", () => {
    const tesla = new Tesla("Y", baseCostCalculator);
    const baseCost = tesla.baseCost();
    expect(baseCost).toEqual(100);
  });

  test("when an instance is created then method 'cost' should return expected cost", () => {
    const tesla = new Tesla("Y", baseCostCalculator);
    const cost = tesla.cost(50);
    expect(cost).toEqual(150);
  });
});
