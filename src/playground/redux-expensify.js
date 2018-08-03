

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 700, createdAt:24000  })
);
const expensethree = store.dispatch(
  addExpense({ description: "Tea", amount: 200, createdAt:3000  })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(   expenseTwo.expense.id, {amount:" 500 "}));
//  store.dispatch(setFilterText({text:"rent"}));
// store.dispatch(setFilterText());
// store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());
// store.dispatch(setStartDate(600));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000));
// const demoState = {
//   expenses: [
//     {
//       id: "poijasdfhwer",
//       description: " January Rent ",
//       note: "The final payment for the address",
//       amount: 54500,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortedBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };
