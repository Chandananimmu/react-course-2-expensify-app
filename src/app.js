import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import Approuter from "./routers/Approuter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setFilterText } from "./actions/filters";
import {sortByDate} from "./actions/filters";
import "react-dates/lib/css/_datepicker.css";
const store = configureStore();
console.log("hai");
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  //console.log(visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "Water bill", amount: 100, createdAt: 1000 })
);

const expenseThree = store.dispatch(
  addExpense({ description: "Gas bill", amount: 10, createdAt: 20084697609 })
);
const expensefour = store.dispatch(
  addExpense({ description: "Tax bill", amount: 10, createdAt: 20084697609 })
);
// store.dispatch(setFilterText({ text: "water" }));
// setTimeout(()=>{
//   store.dispatch(setFilterText({ text: "bill" }));
// },3000)
store.dispatch(sortByDate());
const jsx = (
  <Provider store={store}>
    <Approuter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
