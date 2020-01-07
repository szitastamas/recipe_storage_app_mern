import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contexts/auth/AuthContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { user, logout, isAuthenticated } = authContext;

  const handleLogout = () => {
    logout();
  };

  const guestLinks = (
    <Fragment>
      <li>
        <NavLink className="teal-text link-tag" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="teal-text link-tag" to="/register">
          Register
        </NavLink>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <span className="right teal-text">
        <Link to="/logout" onClick={handleLogout} className="left">
          <i
            className="material-icons teal-text text-darken-3 small"
            style={{ marginRight: ".7rem" }}
          >
            logout
          </i>
        </Link>
        <span className="hide-on-med-and-down">
          Welcome, {user && user.name}
        </span>
      </span>
      <li>
        <NavLink className="teal-text link-tag" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
    </Fragment>
  );

  const guestMobileLinks = (
    <Fragment>
      <li>
        <NavLink className="teal-text link-tag" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="teal-text link-tag" to="/register">
          Register
        </NavLink>
      </li>
    </Fragment>
  );

  const authMobileLinks = (
    <Fragment>
      {
        <span className="teal-text">
          <Link to="/logout" onClick={handleLogout} className="right">
            <i
              className="material-icons teal-text text-darken-3 small"
              style={{ marginRight: ".7rem" }}
            >
              logout
            </i>
          </Link>
          <span >Welcome {user && user.name}</span>
        </span>
      }
      <li>
        <NavLink className="teal-text link-tag" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="nav-extended transparent">
        <div className="nav-wrapper" style={{ padding: "0 2rem" }}>
          <Link to="/" className="brand-logo teal-text flow-text">
            <i className="small material-icons">{icon}</i>
            <span className="flow-text right">{title}</span>
          </Link>
          <Link
            to="#"
            data-target="mobile-demo"
            className="sidenav-trigger teal-text hide-on-large-and-up"
          >
            <i className="material-icons">menu</i>
          </Link>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent teal-text hide-on-med-and-down">
            <li>
              <NavLink className="teal-text link-tag" to="/">
                Home
              </NavLink>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
            <li>
              <NavLink className="teal-text link-tag" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {isAuthenticated ? authMobileLinks : guestMobileLinks}
        <li>
          <NavLink className="teal-text" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="teal-text" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Recipe Storage",
  icon: "free_breakfast"
};
