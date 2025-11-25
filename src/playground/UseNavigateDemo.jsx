import { useNavigate } from "react-router-dom";

export default function UseNavigateDemo() {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <h2>Demo: useNavigate</h2>

      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Volver atrás
      </button>

      <button className="btn btn-success ms-2" onClick={() => navigate("/")}>
        Ir al Dashboard
      </button>
    </div>
  );
}
