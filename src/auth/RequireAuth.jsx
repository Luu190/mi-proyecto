// src/auth/RequireAuth.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function RequireAuth({ children }) {
  const { user, loading } = useUser();

  if (loading) return <p>Cargando...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
