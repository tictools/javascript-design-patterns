import { RoberySensorOperations } from "../../types";

export default class WireStealSensor implements RoberySensorOperations {
  enabled() {
    console.log("enablind from WireStealSensor...");
    return Math.floor(Math.random() * 10) > 5;
  }
}
