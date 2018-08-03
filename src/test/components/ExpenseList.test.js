import React from "react";
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
test('shud render ExpenseList with expenses',()=>{
  const wrapper=shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
test('shud render ExpenseList without expenses',()=>{
  const wrapper=shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});