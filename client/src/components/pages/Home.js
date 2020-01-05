import React from 'react';
import Recipes from '../recipes/Recipes';
import { AddRecipeForm } from '../forms/AddRecipeForm';

const Home = () => {
	return (
		<div>
			<div className='row'>
				<div className='col s12 l6 center-align'>
					<AddRecipeForm />
				</div>
				<div className='col s12 l6'>
					<Recipes />
				</div>
			</div>
		</div>
	);
};

export default Home;
