// src/playground/UseRefDemo.jsx
import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Enfoca el input directamente desde el código
    inputRef.current?.focus();
  };

  return (
    <div className="container py-4">
      <h2>Demo: useRef</h2>
      <p>Este input se enfoca al hacer clic en el botón:</p>

      <input
        ref={inputRef}
        type="text"
        className="form-control mb-3"
        placeholder="Escribe algo..."
      />

      <button className="btn btn-primary" onClick={handleFocus}>
        Enfocar input
      </button>
    </div>
  );
}
