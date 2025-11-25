import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function UseContextDemo() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <InnerComponent />
    </ThemeContext.Provider>
  );
}

function InnerComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container py-4">
      <h2>Demo: useContext</h2>

      <p>Tema actual: {theme}</p>

      <button
        className="btn btn-secondary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Cambiar tema
      </button>
    </div>
  );
}
