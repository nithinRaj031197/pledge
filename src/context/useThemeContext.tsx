import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkTheme);
  }, [isDarkTheme]);

  return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
