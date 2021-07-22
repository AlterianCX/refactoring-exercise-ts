import { expect } from "chai";
import { Account, Statement } from "./account";

describe("Account", () => {
  describe("printStatement", () => {
    it("Receipt 2 transactions", () => {
      const expectedResult =
        `Date\tAmount\tBalance\n` +
        `12/01/2020\t+500\t500\n` +
        `13/01/2020\t-250\t250\n`;

      // initialising state...
      const statement = new Statement();
      const bankAccount = new Account(statement);
      bankAccount.deposit(500, new Date("01-12-2020"));
      bankAccount.withdraw(250, new Date("01-13-2020"));

      const actualResult = bankAccount.printStatement();

      expect(actualResult).to.equal(expectedResult);
    });
  });
});
