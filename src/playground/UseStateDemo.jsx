// src/playground/UseStateDemo.jsx

import { useState } from "react";

export default function UseStateDemo() {
  const [contador, setContador] = useState(0);
  const [visble, setVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false); 
  const [color, setColor] = useState("blue"); // ← color dinámico

  const increment = () => {
    setContador(contador + 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",

        // ⭐ PRIORIDAD: si darkMode está activado → importa más el modo oscuro
        backgroundColor: darkMode ? "#1e1e1e" : color,   // ← AQUÍ SE APLICA TU COLOR
        color: darkMode ? "white" : "black",
        transition: "0.3s ease"
      }}
    >
      <div className="container py-4">
        <h2>Demo: useState</h2>

        {/* BOTÓN MODO OSCURO */}
        <button
          className="btn btn-dark mb-3"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>

        {/* BOTÓN CAMBIO DE COLOR */}
        <button
          className="btn btn-secondary mb-3 ms-2"
          onClick={() => setColor(color === "blue" ? "green" : "blue")}
        >
          {color === "blue" ? "Cambiar a Verde" : "Cambiar a Azul"}
        </button>

        <p>
          <strong>Contador:</strong> {contador}
        </p>

        <button
          className="btn btn-success me-2"
          onClick={increment}
        >
          Incrementar
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={reset}
        >
          Reiniciar
        </button>

        <button
          className="btn btn-warning ms-2"
          onClick={() => setVisible(!visble)}
        >
          {visble ? "Ocultar" : "Mostrar"}
        </button>

        <p>{visble ? `contador visible ${contador}` : ""}</p>
      </div>
    </div>
  );
}
