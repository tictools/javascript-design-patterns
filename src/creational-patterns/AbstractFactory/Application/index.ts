import CommandCenter from "../CommandCenter";
import {
  CommandCenterOperations,
  DiffManagerOperations,
  FactoryOperations,
  RoberySensorOperations,
} from "../types";

export default class Application {
  private factory: FactoryOperations;

  constructor(factory: FactoryOperations) {
    this.factory = factory;
  }

  public createCommandCenter(): CommandCenterOperations {
    const roberySensor: RoberySensorOperations =
      this.factory.createRobberySensor();
    const diffManager: DiffManagerOperations = this.factory.createDiffManager();

    return new CommandCenter(roberySensor, diffManager);
  }
}
