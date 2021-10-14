import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/auth";
import classes from "./Header.module.css";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };
  const menuItemsIfLoggedIn = (
    <Fragment>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </Fragment>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>{isAuthenticated && menuItemsIfLoggedIn}</ul>
      </nav>
    </header>
  );
};

export default Header;
