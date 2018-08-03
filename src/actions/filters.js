export const setFilterText = ({ text = "" } = {}) => ({
  type: "SET_TEXT",
  text
});
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
export const setStartDate = startDate => ({
  type: "SET_STARTDATE",
  startDate
});
export const setEndDate = endDate => ({
  type: "SET_ENDDATE",
  endDate
});