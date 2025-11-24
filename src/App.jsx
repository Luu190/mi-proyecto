// src/App.jsx

import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";

// Tus páginas existentes
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPage/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage/ResetPage.jsx";
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";

// NUEVAS páginas de hooks (las vamos a crear abajo)
import HomeHooks from "./playground/HomeHooks.jsx";
import UseStateDemo from "./playground/UseStateDemo.jsx";
import UseEffectDemo from "./playground/UseEffectDemo.jsx";
import UseRefDemo from "./playground/UseRefDemo.jsx";

function App() {
  return (
<BrowserRouter>
    <Routes>
      {/* Rutas que ya tenías */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/reset" element={<ResetPage />} />

      {/* NUEVAS rutas para la práctica de hooks */}
      <Route path="/homehooks" element={<HomeHooks />} />
      <Route path="/hooks/usestate" element={<UseStateDemo />} />
      <Route path="/hooks/useeffect" element={<UseEffectDemo />} />
      <Route path="/hooks/useref" element={<UseRefDemo />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
