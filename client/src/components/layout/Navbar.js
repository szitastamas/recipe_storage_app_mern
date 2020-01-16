import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/auth/AuthContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);

    const { user, logout, isAuthenticated } = authContext;

    const handleLogout = () => {
        logout();
    };

    const guestLinks = (
        <Fragment>
            <li>
                <NavLink className='teal-text link-tag' to='/login'>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink className='teal-text link-tag' to='/register'>
                    Register
                </NavLink>
            </li>
        </Fragment>
    );

    const authLinks = (
        <Fragment>
            <li>
                <NavLink className='teal-text link-tag' to='/dashboard'>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to='/logout' onClick={handleLogout} className='teal-text link-tag'>
                    Logout
                </NavLink>
            </li>
            <li className='hide-on-med-and-down right link-tag' style={{ padding: '1rem', fontSize: '1.4rem' }}>
                Welcome, {user && user.name}
            </li>
        </Fragment>
    );

    return (
        <Fragment>
            <nav className='nav-extended transparent'>
                <div className='nav-wrapper' style={{ padding: '0 2rem' }}>
                    <Link to='/' className='brand-logo teal-text flow-text'>
                        <i className='small material-icons'>{icon}</i>
                        <span className='flow-text right'>{title}</span>
                    </Link>
                </div>
                <div className='nav-content'>
                    <ul className='tabs tabs-transparent teal-text'>
                        <li>
                            <NavLink className='teal-text link-tag' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='teal-text link-tag' to='/about'>
                                About
                            </NavLink>
                        </li>
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Recipe Storage',
    icon: 'free_breakfast'
};
