import React, { useState, useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer'

const AuthState = (props) => {
	const initialState = {
        isAuthenticated: false,
        loading: true,
        user: null,
        token: null
    };
    
    const [state, dispatch] = useReducer(AuthReducer, initialState)

	return (
		<AuthContext.Provider value={{
			state
		}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;