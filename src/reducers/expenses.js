const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      const idd = action.id;
      return state.filter(({ id }) => id !== idd); //idd->the one wich v need to remove
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else return expense;
      });

    default:
      return state;
  }
};