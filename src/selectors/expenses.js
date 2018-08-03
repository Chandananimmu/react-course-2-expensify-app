import moment from "moment";
const getVisibleExpenses = (
  expenses, {
    text,
    sortedBy,
    startDate,
    endDate
  }
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch =
        startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const EndDateMatch =
        endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      //const startDateMatch=true;
      //const EndDateMatch=true
      //const t1=expense.description.toLowerCase();
      //const t2=text.toLowerCase();
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && EndDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortedBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else
      if (sortedBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });

};
export default getVisibleExpenses;