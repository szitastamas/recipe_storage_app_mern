import React, { useContext, useEffect } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';
import { LoadTheme } from './LoadTheme';

export const ToggleThemeBtn = () => {
    const themeContext = useContext(ThemeContext);

    const { toggleDarkTheme, isDarkThemeActive } = themeContext;

    const activeTheme = LoadTheme();

    const { bgColor, uiColor, secondaryTextColor } = activeTheme;

    const toggleTheme = () => {
        toggleDarkTheme('someUser');
    };

    return (
        <div id='theme-toggle-container'>
            <button className={`btn small ${bgColor} ${secondaryTextColor}`} onClick={toggleTheme}>
                <i className='material-icons'>{isDarkThemeActive ? 'wb_incandescent' : 'brightness_3'}</i>
            </button>
        </div>
    );
};

export default ToggleThemeBtn;
