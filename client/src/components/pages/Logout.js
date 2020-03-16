import React, { useContext, useEffect, useState } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';
import { LoadTheme } from '../theme/LoadTheme';

export const Logout = (props) => {
	const [countdown, setCountdown] = useState(5);

	const activeTheme = LoadTheme();

	useEffect(() => {
		alertContext.setAlert('Logged out successfully', 'success', 5000);

		const redirectAfterFiveSeconds = setTimeout(() => {
			props.history.push('/');
		}, 5000);

		const doCountingDown = setInterval(() => setCountdown((countdown) => countdown - 1), 1000);

		return () => {
			clearTimeout(redirectAfterFiveSeconds);
			clearInterval(doCountingDown);
		};

		// eslint-disable-next-line
	}, []);

	const alertContext = useContext(AlertContext);

	return (
		<div className='container center'>
			<br />
			<h4 className='teal-text'>Thank you for visiting the Recipe Storage App.</h4>
			<p className={activeTheme.secondaryTextColor}>I hope to see you again soon!</p>
			<p className={activeTheme.secondaryTextColor}>
				You will be redirected to the home page in <strong>{countdown} </strong>seconds
			</p>
		</div>
	);
};
