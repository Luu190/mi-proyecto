import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="container py-4">
      <h2>Demo: useReducer</h2>

      <p>Contador: {state.count}</p>

      <button className="btn btn-primary me-2" onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>

      <button className="btn btn-warning" onClick={() => dispatch({ type: "reset" })}>
        Reiniciar
      </button>
    </div>
  );
}
