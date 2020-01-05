import {
	ADD_RECIPE,
	DELETE_RECIPE,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_RECIPE,
	FILTER_RECIPES,
	CLEAR_FILTER
} from '../reducerTypes';

export default (state, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			return {
				...state,
				recipes: [action.payload, ...state.recipes]
			};
		default:
			return state;
	}
};
