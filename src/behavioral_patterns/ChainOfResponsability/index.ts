import Manager from "./Manager";
import Supervisor from "./Supervisor";
import TransactionRequest from "./TransactionRequest";

function main() {
  const manager1 = new Manager("manager1");
  const supervisor1 = new Supervisor("supervisor1");
  const manager2 = new Manager("manager2");
  const transaction = new TransactionRequest(900, "TEST");

  manager1.nextHolder(supervisor1);
  supervisor1.nextHolder(manager2);

  manager1.approveTransaction(transaction);
}

main();
