import filtersReducer from "../../reducers/filters";
import moment from "moment";
test("shud set default", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortedBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});
test("shud set amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortedBy).toBe("amount");
});
test("shud set date", () => {
  const currentState = {
    text: "",
    sortedBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortedBy).toBe("date");
});
test("shud set text", () => {
  const text = "hello";
  const action = {
    type: "SET_TEXT",
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toEqual(text);
});
test("shud set startdate", () => {
  const action = {
    type: "SET_STARTDATE",
    startDate:moment()
  };
  const state = filtersReducer(undefined,action);
  expect(state.startDate).toBe(action.startDate);
});
test("shud set enddate", () => {
  const action = {
    type: "SET_ENDDATE",
    endDate:moment()
  };
  const state = filtersReducer(undefined,action);
  expect(state.endDate).toBe(action.endDate);
});