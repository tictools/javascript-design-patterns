import { RoberySensorOperations } from "../../types";

export default class NoWireSensor implements RoberySensorOperations {
  enabled() {
    console.log("enablind from NoWireSensor...");
    return Math.floor(Math.random() * 10) > 5;
  }
}
