import React from "react";
import { EditPage } from "../../components/EditPage";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
//import { editExpense } from "../../actions/expenses";
let editExpense, history, wrapper, removeExpense;
beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditPage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});
test("shud edit expense correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
test("shud edit onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(wrapper).toMatchSnapshot();
});
test("shud remove onClick", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
  expect(wrapper).toMatchSnapshot();
});
