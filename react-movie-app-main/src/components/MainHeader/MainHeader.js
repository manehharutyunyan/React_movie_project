import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

import Button from "../Button/Button";
import SearchBox from "../SearchBox";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <NavLink
            activeClassName={classes.active}
            to="/welcome"
            className="home-icon"
          >
            Home page
          </NavLink>
          <SearchBox
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
            className="home-icon"
          />
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              <Button>Login</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
