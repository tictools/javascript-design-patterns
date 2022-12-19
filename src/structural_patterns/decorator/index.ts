import Tesla from "./Tesla/Tesla";
import TeslaBaseCostCalculator from "./TeslaBaseCostCalculator/TeslaBaseCostCalculator";
import TeslaAccelerationBoostDecorator from "./TeslaDecorator/TeslaAccelerationBoostDecorator";
import TeslaAutoPilotDecorator from "./TeslaDecorator/TeslaAutoPilotDecorator";

let myTesla;

const baseCalcultator = new TeslaBaseCostCalculator();

myTesla = new Tesla("S", baseCalcultator);
console.log("🚀 :: BASE INSTANCE");
console.log({ description: myTesla.getDescription() });
console.log({ cost: myTesla.cost() });

myTesla = new TeslaAutoPilotDecorator(myTesla);
console.log("🚀 :: AUTOPILOT DECORATOR");
console.log({ description: myTesla.getDescription() });
console.log({ cost: myTesla.cost() });

myTesla = new TeslaAccelerationBoostDecorator(myTesla);
console.log("🚀 :: ACCELERATION BOOST DECORATOR");
console.log({ description: myTesla.getDescription() });
console.log({ cost: myTesla.cost() });
