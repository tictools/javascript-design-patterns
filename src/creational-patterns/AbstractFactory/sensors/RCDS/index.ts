import { DiffManagerOperations } from "../../types";

export default class RCDS implements DiffManagerOperations {
  triggered() {
    console.log("triggering from RCDS...");
    return Math.floor(Math.random() * 10) > 5;
  }
}
