// src/pages/playground/HomeHooks.jsx
import { Link } from "react-router-dom";

const hooks = [
  {
    hook: "useState",
    descripcion: "Maneja estados internos en componentes funcionales.",
    ruta: "/hooks/usestate",
    demo: "UseStateDemo",
    categoria: "Estado"
  },
  {
    hook: "useEffect",
    descripcion: "Ejecuta efectos secundarios después de un render.",
    ruta: "/hooks/useeffect",
    demo: "UseEffectDemo",
    categoria: "Efectos"
  },
  {
    hook: "useRef",
    descripcion: "Referencia mutable para acceder al DOM.",
    ruta: "/hooks/useref",
    demo: "UseRefDemo",
    categoria: "Referencias"
  },
  {
    hook: "useMemo",
    descripcion: "Memoriza cálculos pesados para evitar recomputar.",
    ruta: "/hooks/usememo",
    demo: "UseMemoDemo",
    categoria: "Performance"
  },
  {
    hook: "useCallback",
    descripcion: "Memoriza funciones para evitar recrearlas.",
    ruta: "/hooks/usecallback",
    demo: "UseCallbackDemo",
    categoria: "Performance"
  },
  {
    hook: "useNavigate",
    descripcion: "Permite navegar entre rutas desde funciones.",
    ruta: "/hooks/usenavigate",
    demo: "UseNavigateDemo",
    categoria: "Navegación"
  },
  {
    hook: "useContext",
    descripcion: "Comparte datos globales entre componentes.",
    ruta: "/hooks/usecontext",
    demo: "UseContextDemo",
    categoria: "Estado Global"
  },
  {
    hook: "useReducer",
    descripcion: "Estados complejos con lógica avanzada.",
    ruta: "/hooks/usereducer",
    demo: "UseReducerDemo",
    categoria: "Estado avanzado"
  }
];

export default function HomeHooks() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Tabla Completa de Hooks</h1>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Hook</th>
            <th>Descripción</th>
            <th>Ejemplo</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {hooks.map((h) => (
            <tr key={h.hook}>
              <td><code>{h.hook}</code></td>
              <td>{h.descripcion}</td>
              <td>
                <Link to={h.ruta} className="btn btn-primary btn-sm">
                  Ver {h.demo}
                </Link>
              </td>
              <td>{h.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-3 text-muted small">
        * Hooks permiten manejar estado, efectos, navegación y performance dentro de React.
      </p>
    </div>
  );
}
