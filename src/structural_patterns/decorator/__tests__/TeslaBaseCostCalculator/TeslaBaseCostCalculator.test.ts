import { BASE_PRICES_BY_MODEL } from "../../constants";
import MockTeslaBaseCostCalculator from "../../mocks/MockTeslaBaseCostCalculator";
import TeslaBaseCostCalculator from "../../TeslaBaseCostCalculator/TeslaBaseCostCalculator";

describe("given a class TeslaBaseCostCalculator", () => {
  test("when an instance of TeslaBaseCostCalculator is created then method 'list' should be defined returning expected value type", () => {
    const baseCalculator = new MockTeslaBaseCostCalculator();
    expect(baseCalculator.list).toBeDefined();
    expect(Array.isArray(baseCalculator.list())).toBe(true);
  });

  test("when an instance of TeslaBaseCostCalculator is created then method 'baseCost' should be defined returning expected value type", () => {
    const baseCalculator = new MockTeslaBaseCostCalculator();
    expect(baseCalculator.baseCost).toBeDefined();
    expect(typeof baseCalculator.baseCost("AAA")).toEqual("number");
  });

  test("when 'list()' is called then expected items list should be returned", () => {
    const baseCalculator = new TeslaBaseCostCalculator();
    const itemsList = baseCalculator.list();
    expect(itemsList).toEqual(BASE_PRICES_BY_MODEL);
  });

  test("when 'baseCost()' is called then expected baseCost depending on Model should be returned", () => {
    const baseCalculatorForModelS = new TeslaBaseCostCalculator();
    const baseCostForModelS = baseCalculatorForModelS.baseCost("S");
    expect(baseCostForModelS).toEqual(140000);

    const baseCalculatorForModel3 = new TeslaBaseCostCalculator();
    const baseCostForModel3 = baseCalculatorForModel3.baseCost("3");
    expect(baseCostForModel3).toEqual(50000);

    const baseCalculatorForModelX = new TeslaBaseCostCalculator();
    const baseCostForModelX = baseCalculatorForModelX.baseCost("X");
    expect(baseCostForModelX).toEqual(145000);

    const baseCalculatorForModelY = new TeslaBaseCostCalculator();
    const baseCostForModelY = baseCalculatorForModelY.baseCost("Y");
    expect(baseCostForModelY).toEqual(51000);
  });
});
