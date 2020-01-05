import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RecipeState from './contexts/recipe/RecipeState';

const App = () => {
	return (
		<RecipeState>
			<BrowserRouter>
				<Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
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
