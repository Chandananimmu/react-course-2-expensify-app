import React from "react";
import { AddExpenseDashBoard } from "../../components/AddExpenseDashBoard";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
let startAddExpense, history, wrapper;
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpenseDashBoard startAddExpense={startAddExpense} history={history} />
  );
});
test("shud add expense correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
test("shud handle onSubmit", () => {
  // const onSubmit = jest.fn();
  // const history = { push: jest.fn() };
  // const wrapper = shallow(
  //   <AddExpenseDashBoard onSubmit={onSubmit} history={history} />
  // );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
    <AddExpenseDashBoard startAddExpense={startAddExpense} history={history} />
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
  expect(wrapper).toMatchSnapshot();
});
