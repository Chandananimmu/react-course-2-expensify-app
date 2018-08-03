import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
test("shud setup remove expense action obj", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});
test("shud setup edit expense action obj", () => {
  const action = editExpense("123abc", { note: "Hello" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "Hello"
    }
  });
});
test("shud setup add expense action obj", () => {
  const expensedata = {
    description: "Rent",
    amount: 2000,
    createdAt: 1000,
    note: "This was last month rent"
  };
  const action = addExpense(expensedata);
  expect(action).toEqual({
    type: "ADD_EXPENSE",

    expense: {
      ...expensedata,
      id: expect.any(String)
    }
  });
});
test("shud setup add expense action obj for default", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
