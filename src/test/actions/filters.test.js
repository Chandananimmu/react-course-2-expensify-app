import {
  setStartDate,
  setEndDate,
  setFilterText,
  sortByDate,
  sortByAmount
} from "../../actions/filters";
import moment from "moment";
test("shud set start date action", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_STARTDATE",
    startDate: moment(0)
  });
});
test("shud set end date action", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_ENDDATE",
    endDate: moment(0)
  });
});
test("shud set sort by date action", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});
test("shud set sort by amount action", () => {
  //const action=sortByAmount();
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
test("shud set text filter action", () => {
  const text = "Rent";
  const action = setFilterText({ text });
  expect(action).toEqual({
    type: "SET_TEXT",
    text
  });
});
test("shud set text filter action", () => {
  const action = setFilterText();
  expect(action).toEqual({
    type: "SET_TEXT",
    text: ""
  });
});
