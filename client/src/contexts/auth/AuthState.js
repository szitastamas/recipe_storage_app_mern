import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	AUTH_ERROR,
	USER_LOADED,
	LOGOUT,
	CLEAR_ERRORS
} from '../reducerTypes'

const AuthState = (props) => {
	const initialState = {
        isAuthenticated: null,
        loading: true,
        user: null,
		token: localStorage.getItem("token"),
		error: null
    };
    
	const [state, dispatch] = useReducer(AuthReducer, initialState)
	
	// Load User

	// Login
	const login = async (userData) => {

		const config = {
			headers:{
				"Content-Type": "application/json"
			}
		}

		try {
			const res = await axios.post("/api/auth/", userData, config)
			const token = res.data;

		} catch (err) {
			console.error(err.message)
			throw new Error(err.message)
		}

	}

	// Logout

	// Clear errors in the state

	return (
		<AuthContext.Provider value={{
			isAuthenticated: state.isAuthenticated,
			token: state.token,
			user: state.user,
			loading: state.loading,
			error: state.error,
			login
		}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;