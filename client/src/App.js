import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RecipeState from './contexts/recipe/RecipeState';
import Dashboard from './components/pages/Dashboard';

// TODO - It will always be the public recipes of all users from the backend
// that are displayed on the Home page. In Home's useEffect() I can fetch those.
// On the Dashboard only the user's recipes will be displayed which will also be 
// handled in the useEffect() Hook.

const App = () => {
	return (
		<RecipeState>
			<BrowserRouter>
				<Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/dashboard' component={Dashboard} />
							<Route exact path='/about' component={About} />
							<Route exact path='/contact' component={Contact} />
						</Switch>
					</div>
				</Fragment>
			</BrowserRouter>
		</RecipeState>
	);
};

export default App;
