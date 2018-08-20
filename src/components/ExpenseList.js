import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";
export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
  
</div>
<div className="list-body">
    {props.expenses.length === 0 ? (
      <div>
         <span className="list-item list-item--message">No expenses</span>
      </div>
     
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
    </div>
  </div>
);
const mapToStateProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

//const ConnnectedList = connect(mapToStateProps)(ExpenseList);
export default connect(mapToStateProps)(ExpenseList);
