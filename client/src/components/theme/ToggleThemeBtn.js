import React, { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';
import { LoadTheme } from './LoadTheme';

export const ToggleThemeBtn = () => {
    const themeContext = useContext(ThemeContext);
    const { toggleDarkTheme, isDarkThemeActive } = themeContext;
    const activeTheme = LoadTheme();
    const { uiColor, secondaryTextColor } = activeTheme;

    const toggleTheme = () => {
        toggleDarkTheme('someUser');
    };

    return (
        <div id='theme-toggle-container'>
            <button className={`btn small ${uiColor} ${secondaryTextColor}`} onClick={toggleTheme}>
                <i className='material-icons'>{isDarkThemeActive ? 'wb_incandescent' : 'brightness_3'}</i>
            </button>
        </div>
    );
};

export default ToggleThemeBtn;
