import React, { useContext, Fragment } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import RecipeItem from './RecipeItem';

const Recipes = () => {
	const recipeContext = useContext(RecipeContext);

	const { recipes } = recipeContext;

	const publicRecipes = recipes.filter((r) => r.privacy !== 'private');

	return (
		<Fragment>
			<h2 className='flow-text'>Recently uploaded public recipes</h2>
			{publicRecipes.map((recipe, index) => {
				return <RecipeItem key={recipe.id} recipe={recipe} index={index} />;
			})}
		</Fragment>
	);
};

export default Recipes;
