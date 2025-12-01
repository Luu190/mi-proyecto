// src/auth/GuestOnly.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function GuestOnly({ children }) {
  const { user, loading } = useUser();

  if (loading) return <p>Cargando...</p>;

  if (user) return <Navigate to="/dashboard" replace />;

  return children;
}
