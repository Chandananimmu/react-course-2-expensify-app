import { createStore } from "redux";
const incrementcount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});
const decrementcount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});
const reset = () => ({
  type: "RESET",
 
});
const set = ({ set = 10 } = {}) => ({
  type: "SET",
  set
});
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.set
      };
    default:
      return state;
  }
});
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
type:"INCREMENT",
incrementBy:2
});
store.dispatch(incrementcount());
store.dispatch(incrementcount({ incrementBy: 5 }));
store.dispatch(set({ set: 101 }));
store.dispatch(reset());
store.dispatch(decrementcount({ decrementBy: 10 }));
