import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";
export const ExpenseList = props => (
  <div>
    <p>ExpenseList</p>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);
const mapToStateProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

//const ConnnectedList = connect(mapToStateProps)(ExpenseList);
export default connect(mapToStateProps)(ExpenseList);
