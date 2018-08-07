import React from "react";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import { shallow } from "enzyme";
import {filters,altfilters} from "../fixtures/filters";
import  moment  from "moment";
let setStartDate,setEndDate,setFilterText,sortByDate,sortByAmount,wrapper;
beforeEach(()=>{
  setStartDate=jest.fn();
  setEndDate=jest.fn();
  setFilterText=jest.fn();
  sortByDate=jest.fn();
  sortByAmount=jest.fn();
  wrapper=shallow(<ExpenseListFilter setStartDate={setStartDate} setEndDate={setEndDate} setFilterText={setFilterText}  
    sortByDate={sortByDate} sortByAmount={sortByAmount} filters={filters} />)
})
test("shud set filters correctly",()=>{
  expect(wrapper).toMatchSnapshot();
})
test("shud set filters correctly on data",()=>{
  wrapper.setProps({filters:altfilters});
  expect(wrapper).toMatchSnapshot();
})
test("shud set filters correctly on text change",()=>{
  const value="rentt";
 // wrapper.setProps({filters:altfilters});
  wrapper.find("input").simulate("change",{
    target:{  value }
    });
  expect(setFilterText).toHaveBeenLastCalledWith({text:value});
  expect(wrapper).toMatchSnapshot();
})
test("shud set filters correctly on sortby date ",()=>{
const value="date";
 wrapper.setProps({filters:altfilters});
  wrapper.find("select").simulate("change",{
    target:{  value }
    });
  expect(sortByDate).toHaveBeenLastCalledWith();
  expect(wrapper).toMatchSnapshot();
})
test("shud set filters correctly on sortby amount ",()=>{
  const value="amount";
  // wrapper.setProps({filters:altfilters});
    wrapper.find("select").simulate("change",{
      target:{  value }
      });
    expect(sortByAmount).toHaveBeenLastCalledWith();
    expect(wrapper).toMatchSnapshot();
  })
  test("shud set filters correctly on startdate amount ",()=>{
    //wrapper.setProps({filters:altfilters});
    const startDate=moment(0).add(4,'days');
    const endDate=moment(0).add(8,'days');
      wrapper.find("DateRangePicker").prop("onDatesChange")({
        startDate,
        endDate
        });
      expect(setStartDate).toHaveBeenLastCalledWith(startDate);
      expect(setEndDate).toHaveBeenLastCalledWith(endDate);
      expect(wrapper).toMatchSnapshot();
    })
    test("shud set filters correctly on startdate amount ",()=>{
      //wrapper.setProps({filters:altfilters});
      const calenderFocused='endDate';
      const startDate=moment(0).add(4,'days');
      const endDate=moment(0).add(8,'days');
        wrapper.find("DateRangePicker").prop('onFocusChange')(calenderFocused)
       expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
        expect(wrapper).toMatchSnapshot();
      })