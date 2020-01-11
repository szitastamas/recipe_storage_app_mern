import React, { useContext, useEffect } from 'react';
import Recipes from '../recipes/Recipes';
import AuthContext from '../../contexts/auth/AuthContext';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import LoadingDiv from '../utlity/LoadingDiv';

// import AlertContext from '../../contexts/alert/AlertContext';
const Home = () => {
	const authContext = useContext(AuthContext);
	const { loadUser } = authContext;

	const recipeContext = useContext(RecipeContext);
	const { getPublicRecipes, recipes, loading } = recipeContext;

	useEffect(() => {
		loadUser();
		getPublicRecipes();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<div className='col s12 l6'>
				{loading ? (
					<LoadingDiv loaderType='pulser' />
				) : (
					<Recipes customGrid='home-recipe-grid' title="The most recently uploaded public recipes" />
				)}
			</div>
		</div>
	);
};

export default Home;
