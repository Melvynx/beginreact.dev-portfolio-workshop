import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light" });

const localStorageThemeKey = "colorScheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";
  const isDark = theme === "dark";

  useEffect(() => {
    const savedColorScheme = localStorage.getItem(localStorageThemeKey);

    if (savedColorScheme) {
      setTheme(savedColorScheme);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem(localStorageThemeKey, newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLight, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
