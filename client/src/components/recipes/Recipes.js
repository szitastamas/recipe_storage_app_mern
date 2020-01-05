import React, { useContext, Fragment } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import RecipeItem from './RecipeItem';

const Recipes = () => {
	const recipeContext = useContext(RecipeContext);

	const { recipes } = recipeContext;

	return (
		<Fragment>
			{recipes.map((recipe, index) => {
				return <RecipeItem key={recipe.id} recipe={recipe} index={index} />;
			})}
		</Fragment>
	);
};

export default Recipes;
