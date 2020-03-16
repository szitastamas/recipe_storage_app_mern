import React from 'react';

import setAuthToken from './components/utlity/SetAuthToken';
import AlertState from './contexts/alert/AlertState';
import ThemeState from './contexts/theme/ThemeState';
import { ThemeWrapper } from './ThemeWrapper';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AlertState>
			<ThemeState>
				<ThemeWrapper />
			</ThemeState>
		</AlertState>
	);
};

export default App;
