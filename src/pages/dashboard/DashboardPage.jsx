// src/pages/dashboard/DashboardPage.jsx
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="container py-5" style={{ minHeight: "85vh" }}>
      <h1 className="fw-bold text-center mb-4">Panel de Control</h1>

      <p className="text-center text-muted mb-5">
        Bienvenido al sistema. Aquí puedes acceder a las funciones principales de la aplicación.
      </p>

      <div className="row g-4">

        {/* TARJETA 1 */}
        <div className="col-md-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold">Usuarios Registrados</h5>
              <p className="display-6 text-primary fw-bold">128</p>
              <p className="text-muted">Total de usuarios en el sistema</p>
            </div>
          </div>
        </div>

        {/* TARJETA 2 */}
        <div className="col-md-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold">Actividad Reciente</h5>
              <p className="text-muted">
                Último acceso: <span className="fw-semibold">hace 2 horas</span>
              </p>
              <p className="text-muted">
                Estado del servidor: <span className="text-success fw-semibold">Activo</span>
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA 3 — ENLACE A REGISTRO */}
        <div className="col-md-4">
          <div className="card shadow border-0 h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3">Gestión de Usuarios</h5>
              <p className="text-muted">Registrar nuevos usuarios o gestionar los existentes</p>
              <Link to="/register" className="btn btn-primary w-100 mt-3">
                Registrar Usuario
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Sección inferior */}
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          
        </div>
      </div>
    </div>
  );
}
