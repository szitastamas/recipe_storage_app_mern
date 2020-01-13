import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../contexts/auth/AuthContext';
import AlertContext from '../../contexts/alert/AlertContext';
import { LoadTheme } from '../theme/LoadTheme';

const LoginForm = props => {
    const alertContext = useContext(AlertContext);
    const { setAlert, clearAlerts } = alertContext;

    const authContext = useContext(AuthContext);
    const { login, clearErrors, error, isAuthenticated, loadUser } = authContext;

    useEffect(() => {
        loadUser();
        if (isAuthenticated) {
            props.history.push('/dashboard');
        }
        if (error === 'Invalid Login Data') {
            setAlert(error, 'fail');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = loginData;

    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'fail');
        } else {
            login({ email, password });
            setLoginData({
                email: '',
                password: ''
            });
        }
    };

    const activeTheme = LoadTheme();
    const { secondaryTextColor } = activeTheme;

    return (
        <div className='container form-container'>
            <h3 className='card-title teal-text flow-text'>Log in to your account</h3>
            <form onSubmit={handleLoginSubmit}>
                <div className='input-field'>
                    <input type='email' name='email' id='email' value={email} onChange={handleChange} className={`${secondaryTextColor}`} />
                    <label htmlFor='email'>E-mail Address</label>
                </div>
                <div className='input-field'>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={handleChange}
                        className={`${secondaryTextColor}`}
                    />
                    <label htmlFor='password'>Password</label>
                </div>
                <button type='submit' className='btn'>
                    Log in
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
