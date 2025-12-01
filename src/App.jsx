import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUT GENERAL
import MainLayout from "./layouts/MainLayout.jsx";

// PROTECCIÓN DE RUTAS
import RequireAuth from "./auth/RequireAuth.jsx";
import GuestOnly from "./auth/GuestOnly.jsx";

// PÁGINAS PRINCIPALES
import DashboardPage from "./pages/dashboard/DashboardPage.jsx";
import LoginModern from "./pages/LoginPageModern/LoginModern.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ForgotPage from "./pages/ForgotPage/ForgotPage.jsx";
import ResetPage from "./pages/ResetPage/ResetPage.jsx";

// PLAYGROUND
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
        {/* RUTA PADRE */}
        <Route path="/" element={<MainLayout />}>

          {/* Página inicial: LOGIN MODERNO */}
          <Route
            index
            element={
              <GuestOnly>
                <LoginModern />
              </GuestOnly>
            }
          />

          {/* RUTAS SOLO PARA INVITADOS */}
          <Route
            path="login"
            element={
              <GuestOnly>
                <LoginModern />
              </GuestOnly>
            }
          />

          <Route
            path="register"
            element={
              <GuestOnly>
                <RegisterPage />
              </GuestOnly>
            }
          />

          {/* RUTAS ACCESIBLES A TODOS */}
          <Route path="forgot-password" element={<ForgotPage />} />
          <Route path="reset-password" element={<ResetPage />} />

          {/* RUTA PROTEGIDA */}
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            }
          />

          {/* PLAYGROUND */}
          <Route path="homehooks" element={<HomeHooks />} />
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
