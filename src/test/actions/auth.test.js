
import {login,logout} from "../../actions/auth";
test("shud login correctly", () => {
 const uid='123ad';
 const action=login(uid);
 expect(action).toEqual({
   type:'LOGIN',
   uid
 });
});
test("shud logout correctly", () => {
  
  const action=logout();
  expect(action).toEqual({
    type:'LOGOUT'
    
  });
 });
