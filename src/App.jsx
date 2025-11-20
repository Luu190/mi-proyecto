import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPage/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage/ResetPage.jsx";
import DashboardPage from "./dashboard/DashboardPage.jsx";

// Importar tu CSS global
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página principal */}
        <Route path="/" element={<DashboardPage />} />

        {/* Las 4 vistas que hiciste */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
