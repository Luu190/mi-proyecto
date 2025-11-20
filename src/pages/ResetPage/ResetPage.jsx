import "./ResetPage.css";

function ResetPage() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Restablecer contraseña</h2>

      <p className="auth-description">
        Escribe tu nueva contraseña y confírmala para actualizar tu acceso.
      </p>

      <form className="auth-form">
        <div className="auth-field">
          <label className="auth-label">Nueva contraseña</label>
          <input
            type="password"
            className="auth-input"
            placeholder="Nueva contraseña"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Repetir contraseña</label>
          <input
            type="password"
            className="auth-input"
            placeholder="Repítela de nuevo"
          />
        </div>

        <button type="button" className="btn primary">
          Guardar contraseña
        </button>
      </form>

      <div className="auth-links">
        <a href="#" className="link-text">
          Volver al Login
        </a>
      </div>
    </div>
  );
}

export default ResetPage;
