import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Crear cuenta</h2>

      <form className="auth-form">
        <div className="auth-field">
          <label className="auth-label">Nombre completo</label>
          <input
            type="text"
            className="auth-input"
            placeholder="Tu nombre y apellido"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Correo electrónico</label>
          <input
            type="email"
            className="auth-input"
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Contraseña</label>
          <input
            type="password"
            className="auth-input"
            placeholder="Crea una contraseña"
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
          Registrarse
        </button>
      </form>

      <div className="auth-links">
        <a href="#" className="link-text">
          ¿Ya tienes cuenta? Inicia sesión
        </a>
      </div>
    </div>
  );
}

export default RegisterPage;
