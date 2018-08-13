import Enzyme from "enzyme";
const path = require("path");
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({
  adapter:new Adapter()
});
require('dotenv').config({path:'.env.test'});