import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <Fragment>
      <nav className="nav-extended transparent">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo teal-text flow-text">
            <i className="small material-icons">{icon}</i>
            <span className="flow-text right">{title}</span>
          </Link>
          <Link
            to="#"
            data-target="mobile-demo"
            className="sidenav-trigger teal-text hide-on-med-and-up"
          >
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down teal-text">
            <li>
              <NavLink className="teal-text" to="/" className="teal-text">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="teal-text" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="teal-text" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent teal-text hide-on-small-and-down">
            <li>
              <NavLink className="teal-text link-tag" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="teal-text link-tag" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="teal-text link-tag" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
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
        <li>
          <NavLink className="teal-text" to="/contact">
            Contact
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
