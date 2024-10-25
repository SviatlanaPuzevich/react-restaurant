"use client";
import { ThemeContext } from ".";
import { useCallback } from "react";
import { useState } from "react";

export const DARK_THEME = "dark";
export const COLORED_THEME = "colored";

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(COLORED_THEME);
  const toggleTheme = useCallback(() => {
    if (theme === COLORED_THEME) {
      setTheme(DARK_THEME);
    } else {
      setTheme(COLORED_THEME);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
