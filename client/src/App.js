import React, { Fragment, useEffect } from 'react';

import setAuthToken from './components/utlity/SetAuthToken';
import AlertState from './contexts/alert/AlertState';
import ThemeState from './contexts/theme/ThemeState';
import { ThemeWrapper } from './ThemeWrapper';

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
