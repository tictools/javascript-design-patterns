import RCDS from "../../sensors/RCDS";
import WireStealSensor from "../../sensors/WireStealSensor";
import { FactoryOperations } from "../../types";

export default class CitiluxAbstractFactory implements FactoryOperations {
  createRobberySensor() {
    console.log("creating a new WireStealSensor for CitiluxAbstractFactory");
    return new WireStealSensor();
  }

  createDiffManager() {
    console.log("creating a new RCDS for CitiluxAbstractFactory");
    return new RCDS();
  }
}
