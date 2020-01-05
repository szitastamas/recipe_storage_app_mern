import React, { useState } from 'react';
import Recipes from '../recipes/Recipes';
import FormToggleBtn from '../utlity/FormToggleBtn';
import { AddRecipeForm } from '../forms/AddRecipeForm';

const Home = () => {
	const [formActive, setFormActive] = useState(false);

	const toggleFormActive = () => {
		setFormActive((formActive) => !formActive);
	};

	return (
		<div>
			<FormToggleBtn toggleFormActive={toggleFormActive} isOpen={formActive} />
			<div className='row'>
				<div className='col s12 l6 center-align'>{formActive && <AddRecipeForm />}</div>
				<div className='col s12 l6'>
					<Recipes />
				</div>
			</div>
		</div>
	);
};

export default Home;
