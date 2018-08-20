import React from "react";
import {shallow} from "enzyme";
import LoadingPage from "../../components/LoadingPage";
test("shud render loader correctly",()=>{
  const wrapper=shallow(<LoadingPage/>);
  expect(wrapper).toMatchSnapshot();
})