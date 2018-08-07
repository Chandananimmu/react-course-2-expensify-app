import React from "react";
//import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";
export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3> {description}</h3>
    </Link>

    <p> {numeral(amount/100).format('$0,0.00')}
    -
   {moment(createdAt).format('MMM Do,YYYY')}</p>
  </div>
);

// const mapDispatchFromProps = (push,dispatch) => ({
//  removeExpense: (id)=>dispatch(removeExpense({id})),

// })

//export default connect(null, mapDispatchFromProps)(ExpenseListItem);
export default ExpenseListItem;
