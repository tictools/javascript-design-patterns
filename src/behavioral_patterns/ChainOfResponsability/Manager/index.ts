import AbstractAccountHolder from "../AccountHolder";
import TransactionRequest from "../TransactionRequest";

export default class Manager extends AbstractAccountHolder {
  approveTransaction(transactionRequest: TransactionRequest): boolean {
    if (transactionRequest.getAmount() < 1000) {
      console.log(
        `AccountHolder with name ::${this.getName()}:: has approved {{${transactionRequest.getDescription()}}} transaction`
      );
      super.approveTransaction(transactionRequest);
    }
    return false;
  }
}
