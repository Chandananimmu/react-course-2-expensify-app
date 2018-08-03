import React from "react";
import ExpenseDashBoard from "../components/ExpenseDashBoard";
import AddExpenseDashBoard from "../components/AddExpenseDashBoard";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import {
  BrowserRouter,
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

const Approuter= () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/create" component={AddExpenseDashBoard} />
      <Route path="/edit/:id" component={EditPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/contact" render={() => <h1>Contact Us</h1>} />
      <Route path="/" component={ExpenseDashBoard} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  </BrowserRouter>
);

// const App = () => (
//   <BrowserRouter>
//     <PrimaryLayout />
//   </BrowserRouter>
// )
export default Approuter;