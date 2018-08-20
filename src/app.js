import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import Approuter,{history} from "./routers/Approuter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { startSetExpenses } from "./actions/expenses";
import { login,logout } from "./actions/auth";
import { sortByDate } from "./actions/filters";
import "react-dates/lib/css/_datepicker.css";
import {firebase} from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage"
//import "./playground/promises"

//firebaseInit();
const store = configureStore();
console.log("hai");
//store.subscribe(() => {
  //const state = store.getState();
  //const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  //console.log(visibleExpenses);
//});
// const expenseOne = store.dispatch(
//   addExpense({ description: "Water bill", amount: 100, createdAt: 1000 })
// );

// const expenseThree = store.dispatch(
//   addExpense({ description: "Gas bill", amount: 10, createdAt: 20084697609 })
// );
// const expensefour = store.dispatch(
//   addExpense({ description: "Tax bill", amount: 10, createdAt: 20084697609 })
// );
// store.dispatch(setFilterText({ text: "water" }));
// setTimeout(()=>{
//   store.dispatch(setFilterText({ text: "bill" }));
// },3000)
//store.dispatch(sortByDate());
const jsx = (
  <Provider store={store}>
    <Approuter />
  </Provider>
);
let hasRendered=false;
const renderApp=()=>{
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById("app"));
  hasRendered=true;
  }
}
ReactDOM.render(<LoadingPage/>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user)=>{
if(user){
 
  store.dispatch(login(user.uid));
  console.log(user.uid);
store.dispatch(startSetExpenses()).then(()=>{
  renderApp();
  if(history.location.pathname==='/'){
    history.push('/dashboard')
  }
})
}else{
  store.dispatch(logout());
  console.log("logout");
  renderApp();
history.push('/');
}
})

