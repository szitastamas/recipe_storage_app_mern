import React, { useReducer, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';
import { TOGGLE_DARK_THEME, SET_THEME_ON_LOAD } from '../reducerTypes';

export const ThemeState = props => {
    const initialState = {
        isDarkThemeActive: false,
        lightTheme: {
            uiColor: 'white',
            bgColor: 'white',
            mainTextColor: 'teal-text',
            secondaryTextColor: 'grey-text text-darken-2'
        },
        darkTheme: {
            uiColor: 'grey darken-4',
            bgColor: 'grey darken-3',
            mainTextColor: 'teal-text',
            secondaryTextColor: 'grey-text text-lighten-2'
        }
    };

    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            const isDark = JSON.parse(localStorage.getItem('theme')).isDark;
            setThemeOnLoad(isDark);
        }
        // eslint-disable-next-line
    }, []);

    const toggleDarkTheme = userId => {
        dispatch({
            type: TOGGLE_DARK_THEME
        });
        localStorage.setItem('theme', JSON.stringify({ user: userId, isDark: !state.isDarkThemeActive }));
    };

    const setThemeOnLoad = isDark => {
        dispatch({
            type: SET_THEME_ON_LOAD,
            payload: isDark
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkThemeActive: state.isDarkThemeActive,
                darkTheme: state.darkTheme,
                lightTheme: state.lightTheme,
                toggleDarkTheme,
                setThemeOnLoad
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;
