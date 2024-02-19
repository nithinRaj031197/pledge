import { useState, useEffect } from "react";
const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    applyTheme();
  }, [isDarkTheme]);

  const applyTheme = () => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  };

  return { isDarkTheme, toggleTheme };
};

export default useTheme;
