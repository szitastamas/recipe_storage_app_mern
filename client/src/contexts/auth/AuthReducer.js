import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	AUTH_ERROR,
	USER_LOADED,
	LOGOUT,
	CLEAR_ERRORS

} from '../reducerTypes';

export default (state, action) => {
    switch(action.type){
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
			localStorage.removeItem("token")
			return{
				...state,
				token: null,
				loading: true,
				isAuthenticated: false,
				user: null,
				error: action.payload
			};
		case LOGIN_SUCCESS:
			console.log(action.payload)
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