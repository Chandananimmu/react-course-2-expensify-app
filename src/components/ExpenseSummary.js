import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
export const ExpenseSummary = props => (
  <div>
    <p>
      Viewing {props.expenses.length} expenses totalling{" "}
      {numeral(getExpensesTotal(props.expenses) / 100).format("$0,0.00")}
    </p>
  </div>
);
const mapToStateProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};
export default connect(mapToStateProps)(ExpenseSummary);
