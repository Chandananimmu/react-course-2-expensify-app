import React from "react";
import { shallow } from "enzyme";
import ExpenseDashBoard from "../../components/ExpenseDashBoard";
test("shud render header correctly", () => {
  const wrapper = shallow(<ExpenseDashBoard />);
  expect(wrapper).toMatchSnapshot();
});
