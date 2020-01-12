import {
	ADD_RECIPE,
	DELETE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_RECIPE,
	SET_RECIPE_FILTER,
	CLEAR_RECIPE_FILTER,
	GET_PUBLIC_RECIPES,
	GET_OWN_RECIPES,
	TRIGGER_LOADING
} from '../reducerTypes';

export default (state, action) => {
	switch (action.type) {
		case TRIGGER_LOADING:
			return {
				...state,
				loading: true
			};
		case ADD_RECIPE:
			return {
				...state,
				ownRecipes: [action.payload, ...state.ownRecipes]
			};
		case UPDATE_RECIPE:
			const editedRecipe = action.payload;
			return {
				...state,
				ownRecipes: state.ownRecipes.map(recipe => recipe._id === editedRecipe._id ? editedRecipe : recipe),
				loading: false
			}
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
			return {
				...state,
				filterText: action.payload,
				filteredRecipes: state.publicRecipes.filter((recipe) => {
					return (
						recipe.title.toLowerCase().includes(state.filterText.toLowerCase()) ||
						recipe.description.toLowerCase().includes(state.filterText.toLowerCase()) ||
						recipe.type.toLowerCase().includes(state.filterText.toLowerCase())
					);
				})
			};
		default:
			return state;
	}
};
