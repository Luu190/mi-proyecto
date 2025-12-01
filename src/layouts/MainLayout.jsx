import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function MainLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="nav-modern">
        <div className="container nav-content">
          {/* LOGO */}
          <Link to="/" className="nav-logo">
            React Auth App
          </Link>

          {/* LINKS */}
          <div className="nav-links">
            <Link className={pathname === "/login" ? "active" : ""} to="/login">
              Login
            </Link>
            <Link className={pathname === "/register" ? "active" : ""} to="/register">
              Registro
            </Link>
            <Link className={pathname === "/dashboard" ? "active" : ""} to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main style={{ paddingTop: "90px" }}>
        <Outlet />
      </main>
    </>
  );
}
