interface ITransaction {
  date: Date;
  balance: number;
  amount: number;
}

export class Statement {
  private transactions: ITransaction[];

  constructor() {
    this.transactions = [];
  }

  public recordTransaction(balance: number, amount: number, date: Date): void {
    const newTransaction: ITransaction = {
      balance,
      amount,
      date,
    };

    this.transactions.push(newTransaction);
  }

  public print(): string {
    const tableHeader: string = "Date\tAmount\tBalance\n";
    let printedStatement: string = tableHeader;

    this.transactions.forEach((t: ITransaction): void => {
      const signedAmount: string =
        t.amount > 0 ? `+${t.amount}` : `${t.amount}`;

      const humanReadableDate = t.date.toLocaleDateString();

      printedStatement += `${humanReadableDate}\t${signedAmount}\t${t.balance}\n`;
    });

    return printedStatement;
  }
}

export class Account {
  private balance: number;
  private statement: Statement;

  constructor(statement: Statement) {
    this.balance = 0;
    this.statement = statement;
  }

  public deposit(amount: number, date: Date = new Date()): void {
    if (!this.isPositiveAmount(amount))
      throw new Error("The deposited amount must be positive");

    this.balance += amount;
    this.statement.recordTransaction(this.balance, amount, date);
  }

  public withdraw(amount: number, date: Date = new Date()): void {
    if (!this.isPositiveAmount(amount))
      throw new Error("The withdrawn amount must be positive");

    if (!this.hasSufficientFunds(this.balance, amount))
      throw new Error("The account must have sufficient funds");

    this.balance -= amount;
    this.statement.recordTransaction(this.balance, -amount, date);
  }

  private isPositiveAmount(amount: number): boolean {
    return amount > 0;
  }

  private hasSufficientFunds(balance: number, amount: number): boolean {
    return amount < balance;
  }

  public printStatement(): string {
    return this.statement.print();
  }
}
