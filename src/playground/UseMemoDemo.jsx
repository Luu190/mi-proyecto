import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculando...");
    return count * 1000;
  }, [count]);

  return (
    <div className="container py-4">
      <h2>Demo: useMemo</h2>
      <p>Cálculo pesado memorizado: {expensiveCalculation}</p>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
