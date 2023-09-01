import { useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../styles/theme.js';
import PropTypes from 'prop-types';

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(JSON.parse(savedTheme));
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme({ ...theme, mode: 'dark' });
      }
    }
  }, []);

  return (
    <StyledThemeProvider theme={currentTheme}>
      {children}
    </StyledThemeProvider>
  );

};
export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};