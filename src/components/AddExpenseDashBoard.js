import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
export class AddExpenseDashBoard extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>This msg is from add dashboard </p>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
// const AddExpenseDashBoard = props => (
//   <div>
//     <p>This msg is from add dashboard </p>
//     <ExpenseForm
//       onSubmit={expense => {
//         //  console.log(expense);
//         props.onsubmit(expense);
//         props.history.push("/");
//       }}
//     />
//   </div>
// );
const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});
export default connect( undefined, mapDispatchToProps) (AddExpenseDashBoard);
 


