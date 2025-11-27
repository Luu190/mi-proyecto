// src/auth/GuestOnly.jsx
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";


export default function GuestOnly({ children }) {
  const user = auth.currentUser;

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
