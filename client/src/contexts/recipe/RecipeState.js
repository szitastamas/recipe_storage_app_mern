import React, { useReducer } from 'react';
import uuid from 'uuid';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import {
	ADD_RECIPE,
	DELETE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_RECIPE,
	FILTER_RECIPES,
	CLEAR_FILTER
} from '../reducerTypes';

const RecipeState = (props) => {
	const initialState = {
		recipes: [
			{
				id: 1,
				title: 'goulash soup',
				description:
					'Use water, meat and vegetables. Make a goulash base from the meat and put the vegetables on it with paprika powder. Cook it as long as the meat is not soft AF. Do not forget the Schmand!',
				type: 'soup',
				privacy: 'public',
				date: new Date()
					.toJSON()
					.slice(0, 10)
					.replace(/-/g, '.')
			},
			{
				id: 2,
				title: 'fruit soup',
				description:
					'Use water, fruits and sugar. Put the fruits into the water and start cooking it. Once the fruits are soft you can add the beautiful Schmand.',
				type: 'soup',
				privacy: 'private',
				date: '2019.12.05'
			},
			{
				id: 3,
				title: 'pencake',
				description:
					'Put flour, water, salt and egg into a bowl and pour a portion into a hot pan. Once it is done put vanille pudding on it and enjoy.',
				type: 'dessert',
				privacy: 'public',
				date: '1971.02.21'
			},
			{
				id: 4,
				title: 'spiegelei',
				description:
					'The mastery of creating the perfect Spiegelei is hard. You have to precisely add the eggs to the hot pan and wait until they get a crust on the bottom!',
				type: 'main',
				privacy: 'public',
				date: '2018.04.11'
			}
		]
	};

	const [state, dispatch] = useReducer(RecipeReducer, initialState);

	// Add recipe
	const addRecipe = (recipe) => {
		recipe.id = uuid();
		dispatch({
			type: ADD_RECIPE,
			payload: recipe
		});
	};
	// Update recipe

	// Delete recipe

	// Set current recipe

	// Clear current recipe

	// Filter recipes

	// Clear filter

	return (
		<RecipeContext.Provider
			value={{
				recipes: state.recipes,
				addRecipe
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;
