import {
	ADD_RECIPE,
	DELETE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_RECIPE,
	SET_RECIPE_FILTER,
	CLEAR_RECIPE_FILTER,
	GET_PUBLIC_RECIPES,
	GET_OWN_RECIPES
} from '../reducerTypes';

export default (state, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			return {
				...state,
				ownRecipes: [action.payload, ...state.ownRecipes]
			};
		case CLEAR_RECIPE_FILTER:
		case GET_PUBLIC_RECIPES:
			return {
				...state,
				publicRecipes: action.payload,
				ownRecipes: [],
				loading: false
			};
		case GET_OWN_RECIPES:
			return {
				...state,
				ownRecipes: action.payload,
				publicRecipes: [],
				filteredRecipes: [],
				loading: false
			};
		case DELETE_RECIPE:
			return {
				...state,
				ownRecipes: state.ownRecipes.filter((recipe) => recipe._id != action.payload),
				publicRecipes: state.publicRecipes.filter((recipe) => recipe._id != action.payload),
				loading: false
			};
		case SET_RECIPE_FILTER:
			console.log(action.payload)
			return{
				...state,
				filteredRecipes: state.publicRecipes.filter(recipe => {
					return recipe.title.toLowerCase().includes(action.payload.toLowerCase()) || recipe.description.toLowerCase().includes(action.payload.toLowerCase())	|| recipe.type.toLowerCase().includes(action.payload.toLowerCase())
				})
				// filteredRecipes: state.publicRecipes.filter(recipe => recipe.title.includes(action.payload))
			}
		default:
			return state;
	}
};
