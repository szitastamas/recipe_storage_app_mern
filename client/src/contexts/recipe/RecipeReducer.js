import {
	ADD_RECIPE,
	DELETE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_RECIPE,
	FILTER_RECIPES,
	CLEAR_FILTER,
	GET_PUBLIC_RECIPES,
	GET_OWN_RECIPES

} from '../reducerTypes';

export default (state, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			return {
				...state,
				recipes: [action.payload, ...state.recipes]
			};
		case GET_PUBLIC_RECIPES:
		case GET_OWN_RECIPES:
			return{
				...state,
				recipes: action.payload,
				loading: false
			};
		case DELETE_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter(recipe => recipe._id != action.payload)
			}
		default:
			return state;
	}
};
