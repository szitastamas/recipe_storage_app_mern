import React, { useContext, useEffect } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';
import { LoadTheme } from './LoadTheme';

export const ToggleThemeBtn = () => {
    const themeContext = useContext(ThemeContext);

    const { toggleDarkTheme } = themeContext;

    const activeTheme = LoadTheme();

    const { bgColor, uiColor, secondaryTextColor } = activeTheme;

    const toggleTheme = () => {
        toggleDarkTheme('someUser');
    };

    return (
        <div id='theme-toggle-container'>
            <button className={`btn small ${bgColor} ${secondaryTextColor}`} onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ToggleThemeBtn;
