// Dark mode exercise
import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContexte = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("");

  let isDark = mode === "dark";
  let isLight = mode === "";

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');

    if (storedMode) {
      return setMode(storedMode);
    }

    const mediaQueries = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      mediaQueries.matches ? setMode('dark') : setMode('');
    };

    mediaQueries.addEventListener('change', handleChange);
    handleChange();

    return () => {
      mediaQueries.removeEventListener('change', handleChange);
    }

  }, []);


  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <DarkModeContexte.Provider value={{ mode, setMode, isDark, isLight }}>
      <div>{children}</div>
    </DarkModeContexte.Provider>
  )
};

export const useTheme = () => { };
