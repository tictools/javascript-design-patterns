export default class TransactionRequest {
  private amount: number;
  private description: string;

  constructor(amount: number, description: string) {
    this.amount = amount;
    this.description = description;
  }

  getAmount() {
    return this.amount;
  }

  getDescription() {
    return this.description;
  }
}
