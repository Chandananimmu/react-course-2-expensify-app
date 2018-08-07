import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";
test("shud return 0 fr no expenses", () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});
test("shud return amt fr single expenses", () => {
  const result = getExpensesTotal([expenses[1]]);
  expect(result).toBe(19500);
});
test("shud return amt fr single expenses", () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(19875);
});

