// src/auth/RequireAuth.jsx
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";


export default function RequireAuth({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
