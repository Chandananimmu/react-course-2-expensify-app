
import authReducer from "../../reducers/auth";

test("shud login with  reducer", () => {
  const action = {
    type: "LOGIN",
    uid:'123ad'
 }
  
  const state = authReducer({},action);
  expect(state.uid).toEqual(action.uid);
});

test("shud logout with  reducer", () => {
  const action = {
    type: "LOGOUT",
  
 }
  
  const state = authReducer({uid:'anything'},action);
  expect(state).toEqual({});
});