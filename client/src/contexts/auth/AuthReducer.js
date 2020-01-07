import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	AUTH_ERROR,
	USER_LOADED,
	LOGOUT,
	CLEAR_ERRORS,
	LOADING_USER

} from '../reducerTypes';

export default (state, action) => {
    switch(action.type){
		case LOADING_USER:
			return{
				...state,
				loading: true
			}
		case USER_LOADED:
			return{
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			}
		case REGISTER_SUCCESS:
			localStorage.setItem("token", action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			}
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT:
			localStorage.removeItem("token")
			return{
				...state,
				user: null,
				token: null,
				loading: false,
				isAuthenticated: false,
				error: action.payload
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			}
		case CLEAR_ERRORS:
		return{
			...state,
			error: null
		}
        default:
            return state;
    }
}