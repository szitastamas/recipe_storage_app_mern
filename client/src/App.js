import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RecipeState from './contexts/recipe/RecipeState';
import AuthState from './contexts/auth/AuthState';
import Dashboard from './components/pages/Dashboard';
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';
import AlertState from './contexts/alert/AlertState';
import ThemeState from './contexts/theme/ThemeState';
import { Alerts } from './components/utlity/Alerts';
import setAuthToken from './components/utlity/SetAuthToken';
import { Logout } from './components/pages/Logout';
import { PrivateRoute } from './components/utlity/PrivateRoute';
import ToggleThemeBtn from './components/theme/ToggleThemeBtn';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <AlertState>
            <ThemeState>
                <AuthState>
                    <RecipeState>
                        <BrowserRouter>
                            <Fragment>
                                <ToggleThemeBtn />
                                <Navbar />
                                <Alerts />
                                <div className='container'>
                                    <Switch>
                                        <Route exact path='/' component={Home} />
                                        <Route exact path='/login' component={LoginForm} />
                                        <Route exact path='/register' component={RegisterForm} />
                                        <PrivateRoute exact path='/dashboard' component={Dashboard} />
                                        <Route exact path='/about' component={About} />
                                        <Route exact path='/logout' component={Logout} />
                                    </Switch>
                                </div>
                            </Fragment>
                        </BrowserRouter>
                    </RecipeState>
                </AuthState>
            </ThemeState>
        </AlertState>
    );
};

export default App;
