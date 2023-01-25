import CitiluxAbstractFactory from "./abstactFactories/CitiluxAbstractFactory";
import SmartAbstractFactory from "./abstactFactories/SmartAbstractFactory";
import Application from "./Application";

const citilux = new CitiluxAbstractFactory();
const smart = new SmartAbstractFactory();

const citiluxApplication = new Application(citilux);
const citiluxCommandCenter = citiluxApplication.createCommandCenter();
console.log({
  "citiluxCommandCenter.isDiffTriggered":
    citiluxCommandCenter.isDiffTriggered(),
});
console.log({
  "citiluxCommandCenter.isRoberyEnabled":
    citiluxCommandCenter.isRoberyEnabled(),
});

const smartApplication = new Application(smart);
const smartCommandCenter = smartApplication.createCommandCenter();
console.log({
  "smartCommandCenter.isDiffTriggered": smartCommandCenter.isDiffTriggered(),
});
console.log({
  "smartCommandCenter.isRoberyEnabled": smartCommandCenter.isRoberyEnabled(),
});
