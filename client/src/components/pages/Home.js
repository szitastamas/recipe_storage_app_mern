import React, { useContext, useEffect, useState } from 'react';
import Recipes from '../recipes/Recipes';
import AuthContext from '../../contexts/auth/AuthContext';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import LoadingDiv from '../utlity/LoadingDiv';
import SearchBar from '../utlity/SearchBar'

// import AlertContext from '../../contexts/alert/AlertContext';
const Home = () => {
	const authContext = useContext(AuthContext);
	const { loadUser } = authContext;

	const recipeContext = useContext(RecipeContext);
	const { getPublicRecipes, publicRecipes, filteredRecipes, loading } = recipeContext;

	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		loadUser();
		getPublicRecipes();

		// eslint-disable-next-line
	}, [loading, publicRecipes]);

	const activeRecipes = filteredRecipes.length === 0 ? publicRecipes : filteredRecipes;

	return (
		<div>
			<div className='col s12 l6'>
				<SearchBar />
				{loading ? (
					<LoadingDiv loaderType='pulser' />
				) : (
					<Recipes customGrid='home-recipe-grid' title="The most recently uploaded public recipes" recipes={activeRecipes}/>
				)}
			</div>
		</div>
	);
};

export default Home;
