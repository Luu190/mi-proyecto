// src/playground/UseEffectDemo.jsx
import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [time, setTime] = useState(new Date());

  // Se ejecuta después de cada render para actualizar la hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      console.log("Hora actualizada",new Date());
    }, 1000);

    // Limpieza: se ejecuta cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container py-4">
      <h2>Demo: useEffect</h2>
      <p>Hora actual:</p>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
