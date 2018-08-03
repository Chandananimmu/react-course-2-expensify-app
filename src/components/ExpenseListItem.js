import React from "react";
//import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3> {description}</h3>
    </Link>

    <p> {amount}</p>
    <p>{createdAt}</p>
  </div>
);

// const mapDispatchFromProps = (push,dispatch) => ({
//  removeExpense: (id)=>dispatch(removeExpense({id})),

// })

//export default connect(null, mapDispatchFromProps)(ExpenseListItem);
export default ExpenseListItem;
