import { PricesByModel } from "./types";

export const BASE_PRICES_BY_MODEL: PricesByModel[] = [
  {
    model: "S",
    baseCost: 140000,
  },
  {
    model: "3",
    baseCost: 50000,
  },
  {
    model: "X",
    baseCost: 145000,
  },
  {
    model: "Y",
    baseCost: 51000,
  },
];

export const BASE_PRICES_BY_OPTION = {
  AUTOPILOT: {
    LABEL: "[AUTOPILOT]",
    COST: 5000,
  },
  ACCELERATION_BOOST: {
    LABEL: "[ACCELERATION BOOST]",
    COST: 4000,
  },
};
