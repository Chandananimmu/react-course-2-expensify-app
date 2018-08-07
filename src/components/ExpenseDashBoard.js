import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseSummary from "./ExpenseSummary";
const ExpenseDashBoard = () => (
  <div>
    <ExpenseSummary />
    <ExpenseList />
    <ExpenseListFilter />
  </div>
);
export default ExpenseDashBoard;
