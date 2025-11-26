import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUT GENERAL
import MainLayout from "./layouts/MainLayout.jsx";

// PÁGINAS PRINCIPALES
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ForgotPage from "./pages/ForgotPage/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage/ResetPage.jsx";

// PLAYGROUND - HOOKS
import HomeHooks from "./playground/HomeHooks.jsx";
import UseStateDemo from "./playground/UseStateDemo.jsx";
import UseEffectDemo from "./playground/UseEffectDemo.jsx";
import UseRefDemo from "./playground/UseRefDemo.jsx";
import UseMemoDemo from "./playground/UseMemoDemo.jsx";
import UseCallbackDemo from "./playground/UseCallbackDemo.jsx";
import UseNavigateDemo from "./playground/UseNavigateDemo.jsx";
import UseContextDemo from "./playground/UseContextDemo.jsx";
import UseReducerDemo from "./playground/UseReducerDemo.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTA PADRE CON LAYOUT (Navbar + Footer) */}
        <Route path="/" element={<MainLayout />}>
          {/* index = página principal */}
          <Route index element={<LoginPage />} />

          {/* RUTAS PRINCIPALES */}
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPage />} />
          <Route path="reset-password" element={<ResetPage />} />

          {/* PLAYGROUND */}
          <Route path="homehooks" element={<HomeHooks />} />

          {/* DEMOS DE HOOKS */}
          <Route path="hooks/usestate" element={<UseStateDemo />} />
          <Route path="hooks/useeffect" element={<UseEffectDemo />} />
          <Route path="hooks/useref" element={<UseRefDemo />} />
          <Route path="hooks/usememo" element={<UseMemoDemo />} />
          <Route path="hooks/usecallback" element={<UseCallbackDemo />} />
          <Route path="hooks/usenavigate" element={<UseNavigateDemo />} />
          <Route path="hooks/usecontext" element={<UseContextDemo />} />
          <Route path="hooks/usereducer" element={<UseReducerDemo />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="container py-5 text-center">
                <h2>404 - Página no encontrada</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
