import React, {useContext} from "react";

import classes from "./MainHeader.module.css";
import AuthContext from '../../context/auth-context'

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes["main-header"]}>
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
