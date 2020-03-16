import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/about/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipeState from './contexts/recipe/RecipeState';
import AuthState from './contexts/auth/AuthState';
import Dashboard from './components/pages/dashboard/Dashboard';
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';
import { Alerts } from './components/utlity/Alerts';
import { Logout } from './components/pages/Logout';
import { PrivateRoute } from './components/utlity/PrivateRoute';
import ToggleThemeBtn from './components/theme/ToggleThemeBtn';
import { LoadTheme } from './components/theme/LoadTheme';

export const ThemeWrapper = () => {
	const activeTheme = LoadTheme();

	return (
		<Fragment>
			<AuthState>
				<RecipeState>
					<BrowserRouter>
						<Fragment>
							<ToggleThemeBtn />
							<div className={`page-wrapper-overlay ${activeTheme.uiColor}`}>
								<Navbar />
								<Alerts />
								<div className='container'>
									<Switch>
										<Route exact path='/' component={Home} />
										<Route exact path='/login' component={LoginForm} />
										<Route exact path='/register' component={RegisterForm} />
										<PrivateRoute exact path='/dashboard' component={Dashboard} />
										<Route exact path='/logout' component={Logout} />
										<Route exact path='/about' component={About} />
									</Switch>
								</div>
							</div>
						</Fragment>
					</BrowserRouter>
				</RecipeState>
			</AuthState>
		</Fragment>
	);
};
