/**
 * Requirements:
 * - an interface `GenericAccount` with the following methods:
 *   + `withdraw`
 *   + `deposit`
 *   + `transactionHistory`
 *   + `getBalance`
 *   + `getLastTransaction`
 *
 * - a class `BankAccount` that implements the `GenericAccount` interface
 * - properties on `BankAccount` should be strictly private
 */

export interface Transaction {
	date: Date;
	amount: number;
	balance: number;
}

interface GenericAccount {
	withdraw: (amount: number, date: Date) => void;
	deposit: (amount: number, date: Date) => void;
	transactionHistory: () => Transaction[];
	getLastTransaction: () => Transaction;
	getBalance: () => number;
}

export class BankAccount implements GenericAccount {
	#balance: number;
	#transactions: Transaction[];
	constructor(initialBalance?: number) {
		this.#balance = initialBalance || 0;
		this.#transactions = [];
	}
	withdraw(amount: number) {
		if (amount <= 0) {
			throw new Error("Withdrawal amount must be more than 0");
		}
		this.#balance -= amount;
		this.#transactions.push({ amount: -amount, date: new Date(), balance: this.#balance });
	}
	deposit(amount: number) {
		if (amount <= 0) {
			throw new Error("Deposit amount must be more than 0");
		}
		this.#balance += amount;
		this.#transactions.push({ amount, date: new Date(), balance: this.#balance });
	}
	transactionHistory() {
		return this.#transactions;
	}
	getLastTransaction() {
		return this.#transactions[this.#transactions.length - 1];
	}
	getBalance() {
		return this.#balance;
	}
}
