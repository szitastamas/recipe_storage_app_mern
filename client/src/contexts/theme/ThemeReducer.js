import { TOGGLE_DARK_THEME, SET_THEME_ON_LOAD } from '../reducerTypes';

export default (state, action) => {
    switch (action.type) {
        case TOGGLE_DARK_THEME:
            return {
                ...state,
                isDarkThemeActive: !state.isDarkThemeActive,
                lightTheme: { ...state.lightTheme },
                darkTheme: { ...state.darkTheme }
            };
        case SET_THEME_ON_LOAD:
            return {
                ...state,
                isDarkThemeActive: action.payload,
                lightTheme: { ...state.lightTheme },
                darkTheme: { ...state.darkTheme }
            };
        default:
            return state;
    }
};
