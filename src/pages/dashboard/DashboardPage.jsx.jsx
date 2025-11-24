import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
export default function DashboardPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Bienvenido al Dashboard</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Perfil</h4>
            <p>Ver y editar tu información.</p>
            <button className="btn btn-outline-primary">Entrar</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Configuración</h4>
            <p>Ajustes generales de la cuenta.</p>
            <button className="btn btn-outline-primary">Entrar</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>Actividad</h4>
            <p>Últimas acciones realizadas.</p>
            <button className="btn btn-outline-primary">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
