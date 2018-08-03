import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortedBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortedBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortedBy: "date"
      };
    case "SET_STARTDATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_ENDDATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
export default filtersReducer;
