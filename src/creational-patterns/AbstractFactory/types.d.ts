export interface RoberySensorOperations {
  enabled: () => boolean;
}

export interface DiffManagerOperations {
  triggered: () => boolean;
}

export interface CommandCenterOperations {
  isDiffTriggered: () => boolean;
  isRoberyEnabled: () => boolean;
}

export interface FactoryOperations {
  createRobberySensor: () => RoberySensor;
  createDiffManager: () => DiffManager;
}
