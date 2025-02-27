import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
const useUpdateTheme = () => useContext(ThemeUpdateContext);

export { ThemeProvider, useTheme, useUpdateTheme };