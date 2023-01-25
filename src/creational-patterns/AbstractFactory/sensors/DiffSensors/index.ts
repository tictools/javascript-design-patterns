import { DiffManagerOperations } from "../../types";

export default class DiffSensor implements DiffManagerOperations {
  triggered() {
    console.log("triggering from DiffSensors...");
    return Math.floor(Math.random() * 10) > 5;
  }
}
