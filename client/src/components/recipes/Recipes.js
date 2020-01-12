import React, { useContext, Fragment, useState } from 'react';
import RecipeContext from '../../contexts/recipe/RecipeContext';
import RecipeItem from './RecipeItem';
import LoadingDiv from '../utlity/LoadingDiv';
import RecipeDetails from './RecipeDetails';

const Recipes = ({ customGrid, title, recipes }) => {
	const recipeContext = useContext(RecipeContext);
	const { loading } = recipeContext;

	const [recipeDetails, setRecipeDetails] = useState(null);

	const showDetails = (recipe) => {
		setRecipeDetails(recipe);
	};

	const removeDetails = () => {
		setRecipeDetails(null);
	};

	return (
		<Fragment>
			<div className='col s12 m8 text-right'>
				<h2 className='flow-text card-title teal-text text-lighten-2'>{title}</h2>
			</div>
			{!loading ? (
				<div className={customGrid}>
					{recipes.map((recipe, index) => {
						return <RecipeItem key={recipe._id} recipe={recipe} index={index} showDetails={showDetails} />;
					})}
				</div>
			) : (
				<LoadingDiv />
			)}
			{recipeDetails && <RecipeDetails recipe={recipeDetails} removeDetails={removeDetails} />}
		</Fragment>
	);
};

export default Recipes;
