import {
  CommandCenterOperations,
  DiffManagerOperations,
  RoberySensorOperations,
} from "../types";

export default class CommandCenter implements CommandCenterOperations {
  private roberySensor: RoberySensorOperations;
  private diffManager: DiffManagerOperations;

  constructor(
    roberySensor: RoberySensorOperations,
    diffManager: DiffManagerOperations
  ) {
    this.diffManager = diffManager;
    this.roberySensor = roberySensor;
  }

  isDiffTriggered() {
    return this.diffManager.triggered();
  }

  isRoberyEnabled() {
    return this.roberySensor.enabled();
  }
}
