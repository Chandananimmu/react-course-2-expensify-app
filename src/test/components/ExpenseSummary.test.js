import { shallow } from "enzyme";
import React from "react";
import expenses from "../fixtures/expenses";
import { ExpenseSummary} from  "../../components/ExpenseSummary";
test('shud render no. of expenses',()=>{
  const wrapper=shallow(<ExpenseSummary expenses={[expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();

});
test('shud render multiple of expenses',()=>{
  const wrapper=shallow(<ExpenseSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();

});
