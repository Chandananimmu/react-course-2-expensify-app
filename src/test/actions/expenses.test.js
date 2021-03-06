import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
const uid="thisismyuserid";
const defaultAuthState={auth:{uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expensedata={};
  expenses.forEach(({id,description,note,amount,createdAt})=>{
    expensedata[id]={description,note,amount,createdAt};
  });
  database.ref(`users/${uid}/expenses`).set(expensedata).then(()=>done());
});
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
test("shud edit on start",(done)=>{
const store=createMockStore(defaultAuthState);
const updates={
  note:"haiyyyy"
}
store.dispatch(startEditExpense(expenses[2].id,updates)).then(()=>{
  const action=store.getActions();
  expect(action[0]).toEqual({
    type:"EDIT_EXPENSE",
    id:expenses[2].id,
    updates
  });
  return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once("value");
}).then((snapshot) => {
  expect(snapshot.val().note).toEqual(updates.note);
  done();

});
});
test("shud fetch data",(done)=>{
  const store=createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(()=>{
    const action=store.getActions();
    expect(action[0]).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
    
    done();
  });
});
test("shud set expenses",()=>{
  const action=setExpenses(expenses);
  expect(action).toEqual({
    type:"SET_EXPENSES" ,
   expenses
  });
});

test("shud setup add expense action obj", () => {
  // const expensedata = {
  //   description: "Rent",
  //   amount: 2000,
  //   createdAt: 1000,
  //   note: "This was last month rent"
  // };
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});
test("shud add expense to db and store", done => {
  const expensedata = {
    description: "Rent",
    amount: 2000,
    createdAt: 1000,
    note: "This was last month rent"
  };
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startAddExpense(expensedata))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expensedata
        }
      });
     return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expensedata);
      done();
    
    });
});
test("shud remove on start",(done)=>{
  const store = createMockStore(defaultAuthState);
  const id=expenses[2].id;
store.dispatch(startRemoveExpense({id})).then(()=>{
  const actions=store.getActions();
  expect(actions[0]).toEqual({
    type:"REMOVE_EXPENSE",
    id
  });
  return database.ref(`users/${uid}/expenses/${id}`).once("value");
}).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test("shud setup add expense action obj for default", () => {
  const expensedata = {
    description: "",
    amount: 0,
    createdAt: 0,
    note: ""
  };
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expensedata
        }
      });
     return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expensedata);
      done();
    
    });
});

// test("shud setup add expense action obj for default", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });
