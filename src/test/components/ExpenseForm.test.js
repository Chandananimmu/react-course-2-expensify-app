import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";
test("shud render ExpenseForm", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});
test("shud render ExpenseForm for expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
test("shud render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
test("shud set description on input change", () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});
test("shud set note on input change", () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change',{
    target:{value}
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});
test("shud set amount on input change", () => {
  const value = '2.12';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});
test("shud set amount on input change", () => {
  const value = '2.123';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change',{
    target:{value}
  });
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});
test("shud call onsubmit for valid form submission",()=>{
  const onSubmitSpy=jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount:  expenses[0].amount,
    createdAt:expenses[0].createdAt
  })
  expect(wrapper).toMatchSnapshot();
});
test("should set new date on date change",()=>{
  const now=moment();
  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});
test("should set calenderfocused on focused",()=>{
  const focused=true;
  const wrapper=shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calenderFocused')).toEqual(focused);
});