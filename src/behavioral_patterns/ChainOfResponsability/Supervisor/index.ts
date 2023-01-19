import AbstractAccountHolder from "../AccountHolder";
import TransactionRequest from "../TransactionRequest";

export default class Supervisor extends AbstractAccountHolder {
  approveTransaction(transactionRequest: TransactionRequest): boolean {
    if (transactionRequest.getAmount() < 5000) {
      console.log(
        `AccountHolder with name ::${this.getName()}:: has approved {{${transactionRequest.getDescription()}}} transaction`
      );
      super.approveTransaction(transactionRequest);
    }
    return false;
  }
}
