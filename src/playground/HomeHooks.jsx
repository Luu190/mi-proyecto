// src/pages/playground/HomeHooks.jsx
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
    descripcion:
      "Ejecuta efectos secundarios cuando cambia el estado o las props.",
    ruta: "/hooks/useeffect",
    componente: "UseEffectDemo",
    categoria: "Efectos",
  },
  {
    hook: "useRef",
    descripcion:
      "Crea una referencia mutable para acceder al DOM o guardar valores.",
    ruta: "/hooks/useref",
    componente: "UseRefDemo",
    categoria: "Referencias",
  },
  {
    hook: "useMemo",
    descripcion:
      "Memoriza valores para evitar cálculos pesados en cada render.",
    ruta: "/hooks/usememo",
    componente: "UseMemoDemo",
    categoria: "Performance",
  },
  {
    hook: "useCallback",
    descripcion: "Memoriza funciones para evitar recrearlas.",
    ruta: "/hooks/usecallback",
    componente: "UseCallbackDemo",
    categoria: "Performance",
  },
  {
    hook: "useNavigate",
    descripcion: "Permite navegar entre rutas del proyecto.",
    ruta: "/hooks/usenavigate",
    componente: "UseNavigateDemo",
    categoria: "Navegación",
  },
  {
    hook: "useContext",
    descripcion:
      "Comparte datos globales entre componentes sin props.",
    ruta: "/hooks/usecontext",
    componente: "UseContextDemo",
    categoria: "Estado Global",
  },
  {
    hook: "useReducer",
    descripcion:
      "Maneja estados complejos con lógica avanzada.",
    ruta: "/hooks/usereducer",
    componente: "UseReducerDemo",
    categoria: "Estado Avanzado",
  },
];

export default function HomeHooks() {
  return (
    <div className="container py-4">
      <h1 className="mb-3 text-center">Tabla de Hooks — React</h1>
      <p className="text-center text-muted mb-4">
        Lista completa de hooks con ejemplos navegables.
      </p>

      <table className="table table-striped table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Hook</th>
            <th>Descripción</th>
            <th>Demo</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {hooksData.map((item) => (
            <tr key={item.hook}>
              <td>
                <code>{item.hook}</code>
              </td>

              <td>{item.descripcion}</td>

              <td>
                <Link to={item.ruta} className="btn btn-primary btn-sm">
                  Ver {item.componente}
                </Link>
              </td>

              <td>{item.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 small text-muted">
        * Los hooks permiten manejar estado, efectos, navegación y
        performance dentro de React.
      </p>
    </div>
  );
}
