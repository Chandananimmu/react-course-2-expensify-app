import React from "react";
//import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title"> {description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format("MMM Do,YYYY")}</span>
    </div>
    <h3 className="list-item__data"> {numeral(amount / 100).format("$0,0.00")} </h3>
  </Link>
);

// const mapDispatchFromProps = (push,dispatch) => ({
//  removeExpense: (id)=>dispatch(removeExpense({id})),

// })

//export default connect(null, mapDispatchFromProps)(ExpenseListItem);
export default ExpenseListItem;
