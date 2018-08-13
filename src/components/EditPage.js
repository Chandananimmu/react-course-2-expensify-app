import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";
export class EditPage extends React.Component {
  onSubmit =( expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}
// const EditPage = props => (
//   <div>
//     <ExpenseForm
//     expense={props.expense}
//       onSubmit={(expense) => {
//        const id=props.expense.id
//         props.dispatch(editExpense(id,expense));
//         props.history.push("/")
//        // console.log("updated", expense);
//       }}
//     />
//      <button
//       onClick={() => {
//         const id=props.expense.id
//         props.dispatch(removeExpense({id}));
//         props.history.push("/")
//       }}
//     >
//       Remove
//     </button>
//   </div>
// );

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
