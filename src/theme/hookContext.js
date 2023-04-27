import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import './style.css';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme == 'light') {
      return setTheme('dark');
    } else {
      return setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
