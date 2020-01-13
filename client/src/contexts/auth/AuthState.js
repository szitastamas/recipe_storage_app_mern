import React, { useReducer, useContext } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import AlertContext from '../alert/AlertContext';
import axios from 'axios';
import setAuthToken from '../../components/utlity/SetAuthToken';
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, USER_LOADED, LOGOUT, CLEAR_ERRORS } from '../reducerTypes';

const AuthState = props => {
    const alertContext = useContext(AlertContext);

    const initialState = {
        isAuthenticated: null,
        loading: true,
        user: null,
        token: localStorage.getItem('token'),
        error: null
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const { setAlert } = alertContext;
    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            });
        }
    };

    // Register user

    const register = async userData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/users', userData, config);
            const token = res.data;

            dispatch({
                type: REGISTER_SUCCESS,
                payload: token
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    };

    // Login
    const login = async userData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/auth/', userData, config);
            const token = res.data;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: token
            });

            loadUser();
        } catch (err) {
            setAlert(err.message, 'fail');
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    };

    // Logout
    const logout = () => {
        setAuthToken();
        dispatch({
            type: LOGOUT
        });
    };
    // Clear errors in the state
    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        });
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                token: state.token,
                user: state.user,
                loading: state.loading,
                error: state.error,
                register,
                login,
                logout,
                loadUser,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
