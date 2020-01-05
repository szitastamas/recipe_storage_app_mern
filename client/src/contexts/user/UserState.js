import React, { useContext } from 'react';
import UserContext from './UserContext';

export const UserStateProvider = () => {
	const userContext = useContext(UserContext);

	return <div></div>;
};
