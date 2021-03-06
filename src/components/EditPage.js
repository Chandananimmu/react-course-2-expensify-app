import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
export class EditPage extends React.Component {
  onSubmit =( expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onClick = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => { this.props.startRemoveExpense({ id: this.props.expense.id });
          this.props.history.push("/");}
        },
        {
          label: 'No',
          onClick: () =>{ this.props.history.push("/");}
        }
      ]
    })
   
  };
  render() {
    return (
     <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense </h1>
          </div>
        </div>
      <div className="content-container">
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button className="button--secondary"onClick={this.onClick}>Remove Expense</button>
      </div>
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
