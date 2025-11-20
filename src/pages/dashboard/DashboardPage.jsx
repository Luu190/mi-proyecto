import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="icon-circle"></div>

      <h1 className="portal-title">Portal</h1>

      <div className="buttons">
        <button className="btn primary">Entrar</button>
        <button className="btn secondary">Crear cuenta</button>
      </div>

      <p className="footer-text">Footer text</p>
    </div>
  );
}

export default DashboardPage;
