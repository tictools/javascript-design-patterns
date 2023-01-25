import DiffSensor from "../../sensors/DiffSensors";
import NoWireSensor from "../../sensors/NoWireSensor";
import { FactoryOperations } from "../../types";

export default class SmartAbstractFactory implements FactoryOperations {
  createDiffManager() {
    console.log("creating a new DiffSensor for SmartAbstractFactory");
    return new DiffSensor();
  }

  createRobberySensor() {
    console.log("creating a new NoWireSensor for SmartAbstractFactory");
    return new NoWireSensor();
  }
}
