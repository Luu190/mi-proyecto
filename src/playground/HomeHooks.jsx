// src/playground/HomeHooks.jsx
import { Link } from "react-router-dom";

const hooksData = [
  {
    hook: "useState",
    descripcion: "Permite manejar estados en componentes funcionales.",
    ruta: "/hooks/usestate",
    componente: "UseStateDemo",
    categoria: "Estado",
  },
  {
    hook: "useEffect",
    descripcion: "Ejecuta efectos secundarios cuando cambia el estado o las props.",
    ruta: "/hooks/useeffect",
    componente: "UseEffectDemo",
    categoria: "Efectos",
  },
  {
    hook: "useRef",
    descripcion: "Crea una referencia mutable para acceder al DOM o guardar valores.",
    ruta: "/hooks/useref",
    componente: "UseRefDemo",
    categoria: "Referencias",
  },
];

export default function HomeHooks() {
  return (
    <div className="container py-4">
      <h1 className="mb-3 text-center">Práctica de Hooks</h1>
      <p className="text-center text-muted mb-4">
        Tabla con algunos hooks de React y enlaces a sus ejemplos.
      </p>

      <table className="table table-striped table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Hook</th>
            <th>Descripción</th>
            <th>Componente / Demo</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {hooksData.map((item) => (
            <tr key={item.hook}>
              {/* Columna 1: nombre del hook */}
              <td>
                <code>{item.hook}</code>
              </td>

              {/* Columna 2: descripción */}
              <td>{item.descripcion}</td>

              {/* Columna 3: botón que navega al demo */}
              <td>
                <Link to={item.ruta} className="btn btn-sm btn-primary">
                  Ver {item.componente}
                </Link>
              </td>

              {/* Columna 4: categoría */}
              <td>{item.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 small text-muted">
        * Los hooks son funciones especiales de React que permiten usar estado,
        efectos y otras características en componentes funcionales.
      </p>
    </div>
  );
}
