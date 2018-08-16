import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from "../../components/Login";
test("shud render login correctly", () => {
  const wrapper = shallow(<LoginPage startLogin={()=>{}} />);
  expect(wrapper).toMatchSnapshot();
});
test("shud logout on button click",()=>{
  const   startLogin = jest.fn();
  const  wrapper=shallow(<LoginPage startLogin={startLogin}/>);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
})
