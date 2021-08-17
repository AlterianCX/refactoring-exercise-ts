# Banking Kata

## Introduction

A local Bank 'Alibastair Bank' has decided to ditch pen and paper, and start to record transactions on a computer!

## Requirements

- a class `BankAccount` that implements the following:
  - `getBalance()`
    - should have a starting balance of 0
  - `transactionHistory()`
    - should return an empty array when there are no transactions
    - should return a non-empty array when transactions have been made
    - should contain properties date, amount, and balance for each transaction
  - `deposit()`
    - should allow deposits
    - should not allow deposits of 0 or less
  - `withdraw()`
    - should allow withdrawls
    - should not allow withdrawls of 0 or less
  - `getLastTransaction()`
    - should contain properties date, amount, and balance
- any properties on `BankAccount` should be strictly private in the transpiled JavaScript

## Rules

Stick to Typescript and do not use 3rd party resources.
