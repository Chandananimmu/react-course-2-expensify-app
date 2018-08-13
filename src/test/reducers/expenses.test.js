import expenses from "../fixtures/expenses";
import expenseReducer from "../../reducers/expenses";
test("shud set default state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});
test("shud remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test("shud nt remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
test("shud nt edit expenses if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates:{
    note: "hai"
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
test("shud edit expense by id", () => {
 
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates:{
    note: "hai"
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].note).toEqual(action.updates.note);
});
test("shud add expense", () => {
  const expense = {
    id: "4",
    note: "hai",
    descripton: "RENT",
    amount: 500,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
test("shud set expenses",()=>{
  const action = {
    type: "SET_EXPENSES",
    expenses:[expenses[1]]
  };
  const state=expenseReducer(expenses,action);
  expect(state).toEqual([expenses[1]]);
})
