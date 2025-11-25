import { useState, useCallback } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const logNumber = useCallback(() => {
    console.log("Número:", count);
  }, [count]);

  return (
    <div className="container py-4">
      <h2>Demo: useCallback</h2>

      <p>Valor actual: {count}</p>

      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <button className="btn btn-secondary" onClick={logNumber}>
        Ejecutar función memorizada
      </button>
    </div>
  );
}
