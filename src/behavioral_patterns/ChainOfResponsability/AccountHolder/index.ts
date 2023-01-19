import TransactionRequest from "../TransactionRequest";

export default abstract class AbstractAccountHolder {
  private name: string;
  private nextAccountHolder: AbstractAccountHolder | undefined;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  nextHolder(accountHolder: AbstractAccountHolder) {
    this.nextAccountHolder = accountHolder;
    return this.nextAccountHolder;
  }

  approveTransaction(transactionRequest: TransactionRequest): boolean {
    if (this.nextAccountHolder) {
      this.nextAccountHolder.approveTransaction(transactionRequest);
    }
    return false;
  }
}
