import React from "react";
//import ReactShallowRenderer from "react-test-renderer/shallow" ;
import {shallow} from "enzyme";
//import toJSON from "enzyme-to-json";
import {Header} from "../../components/Header";

test("shud render header correctly",()=>{
  const wrapper=shallow(<Header startLogout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
  // const renderer=new ReactShallowRenderer();
  // renderer.render(<Header />);
  // console.log(renderer)
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
})
test("shud logout on button click",()=>{
  const   startLogout = jest.fn();
  const  wrapper=shallow(<Header startLogout={startLogout}/>);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
})