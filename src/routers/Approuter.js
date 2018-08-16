import React from "react";
import ExpenseDashBoard from "../components/ExpenseDashBoard";
import AddExpenseDashBoard from "../components/AddExpenseDashBoard";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/Login";
import createHistory from "history/createBrowserHistory"
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import {
  Router,
  Route,
  Switch,
  Link,
  browserHistory,
  NavLink
} from "react-router-dom";








// const PrimaryLayout = () => (
//   <div className="primary-layout">
//     <header>
//       Our React Router 4 App
//     </header>
//     <main>
//       <Route path="/" exact component={ExpenseDashBoard} />
//       <Route path="/create" component={AddExpenseDashBoard} />
//     </main>
//   </div>
// )
export const history=createHistory();
const Approuter= () => (
  <Router history={history}>
  <div>

    <Switch>
    <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/create" component={AddExpenseDashBoard} />
      <PrivateRoute path="/dashboard" component={ExpenseDashBoard}  />
      
      <PrivateRoute path="/edit/:id" component={EditPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/contact" render={() => <h1>Contact Us</h1>} />
  
   
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  </Router>
);

// const App = () => (
//   <BrowserRouter>
//     <PrimaryLayout />
//   </BrowserRouter>
// )
export default Approuter;