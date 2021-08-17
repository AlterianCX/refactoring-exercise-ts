import assert from "assert";
import { BankAccount } from "./account";

describe("BankAccount", () => {
	const account = new BankAccount();
	it("should have 0 public properties", () => {
		assert.equal(Object.keys(account).length, 0);
	});
	describe("#getBalance()", () => {
		it("should have a starting balance of 0", () => {
			assert.equal(account.getBalance(), 0);
		});
	});
	describe("#transactionHistory()", () => {
		it("should return an empty array when there are no transactions", () => {
			assert.equal(account.transactionHistory().length, 0);
		});
		it("should return a non-empty array when transactions have been made", () => {
			account.deposit(100);
			account.withdraw(100);
			assert.equal(account.transactionHistory().length, 2);
		});
		it("should contain properties date, amount, and balance for each transaction", () => {
			const transaction = account.transactionHistory()[0];
			assert.equal(typeof transaction.date, typeof new Date());
			assert.equal(typeof transaction.amount, "number");
			assert.equal(typeof transaction.balance, "number");
		});
	});
	describe("#getLastTransaction()", () => {
		it("should contain properties date, amount, and balance", () => {
			const transaction = account.getLastTransaction();
			assert.equal(typeof transaction.date, typeof new Date());
			assert.equal(typeof transaction.amount, "number");
			assert.equal(typeof transaction.balance, "number");
		});
	});
	describe("#deposit()", () => {
		it("should allow deposits", () => {
			account.deposit(100);
			assert.equal(account.getBalance(), 100);
		});
		it("should not allow deposits of 0 or less", () => {
			assert.throws(() => account.deposit(0));
			assert.throws(() => account.deposit(-1));
		});
	});
	describe("#withdraw()", () => {
		it("should allow withdrawls", () => {
			account.withdraw(100);
			assert.equal(account.getBalance(), 0);
		});
		it("should not allow withdrawls of 0 or less", () => {
			assert.throws(() => account.withdraw(0));
			assert.throws(() => account.withdraw(-1));
		});
	});
});
