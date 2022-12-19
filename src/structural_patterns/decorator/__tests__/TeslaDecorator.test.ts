import MockTesla from "../mocks/MockTesla";
import MockTeslaDecorator from "../mocks/MockTeslaDecorator";
import { TeslaOptions } from "../types";

describe("given TeslaDecorator class", () => {
  let mockedTesla: TeslaOptions;

  beforeEach(() => {
    mockedTesla = new MockTesla();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("when an instace is created then methods 'getDescription()' and 'cost()' should be defined", () => {
    const mockedDecoratedTesla = new MockTeslaDecorator(mockedTesla);
    expect(mockedDecoratedTesla.getDescription).toBeDefined();
    expect(mockedDecoratedTesla.cost).toBeDefined();
  });

  test("when method 'getDescription()' is called then expected decorated string should be returned", () => {
    const EXPECTED_DECORATED_STRING =
      "Tesla Model description has been decorated";

    const spyOnGetDescription: jest.SpyInstance<string, []> = jest.spyOn(
      mockedTesla,
      "getDescription"
    );

    const mockedDecoratedTesla = new MockTeslaDecorator(mockedTesla);
    const decoratedDescription = mockedDecoratedTesla.getDescription();

    expect(spyOnGetDescription).toHaveBeenCalled();
    expect(decoratedDescription).toEqual(EXPECTED_DECORATED_STRING);
  });

  test("when method 'getDescription()' is called then expected decorated string should be returned", () => {
    const EXPECTED_DECORATED_COST = 150;
    ("Tesla Model description has been decorated");

    const spyOnCost: jest.SpyInstance<number, []> = jest.spyOn(
      mockedTesla,
      "cost"
    );

    const mockedDecoratedTesla = new MockTeslaDecorator(mockedTesla);
    const decoratedCost = mockedDecoratedTesla.cost();

    expect(spyOnCost).toHaveBeenCalled();
    expect(decoratedCost).toEqual(EXPECTED_DECORATED_COST);
  });
});
