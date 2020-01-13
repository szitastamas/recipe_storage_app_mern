import React, { useContext, useEffect } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';
import AuthContext from '../../contexts/auth/AuthContext';
import { LoadTheme } from '../theme/LoadTheme';

export const Logout = () => {
	const countdown = 5;

	const activeTheme = LoadTheme();

	useEffect(() => {
		alertContext.setAlert('Logged out successfully', 'success', countdown * 1000);
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	return (
		<div className='container center'>
			<br />
			<h4 className='teal-text'>Thank you for visiting the Recipe Storage App.</h4>
			<p className={`${activeTheme.secondaryTextColor}`}>I hope to see you again soon!</p>
		</div>
	);
};
