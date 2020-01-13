import { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';

export const LoadTheme = () => {
    const themeContext = useContext(ThemeContext);

    const { lightTheme, darkTheme, isDarkThemeActive, toggleDarkTheme } = themeContext;

    const activeTheme = isDarkThemeActive ? darkTheme : lightTheme;

    return activeTheme;
};
