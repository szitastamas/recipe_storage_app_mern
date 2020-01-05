import React from 'react';
import Recipes from '../recipes/Recipes';

const Home = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col s4'>{/* Form Component Incoming */}</div>
				<div className='col s7 offset-s1'>
					<Recipes />
				</div>
			</div>
		</div>
	);
};

export default Home;
