import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to={`/create`} activeClassName="is-active">
      Go to create
    </NavLink>

    <NavLink to={`/help`} activeClassName="is-active">
      Go to help
    </NavLink>
    <NavLink to={`/`} exact={true} activeClassName="is-active">
      Go to home
    </NavLink>
  </header>
);
export default Header;
