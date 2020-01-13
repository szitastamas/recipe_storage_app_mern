import { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';

export const LoadTheme = () => {
    const themeContext = useContext(ThemeContext);

    const { lightTheme, darkTheme, isDarkThemeActive } = themeContext;

    const activeTheme = isDarkThemeActive ? darkTheme : lightTheme;

    return activeTheme;
};
