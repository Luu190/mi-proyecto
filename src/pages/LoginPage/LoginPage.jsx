import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Iniciar sesión</h2>

      <form className="auth-form">
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
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <button type="button" className="btn primary">
          Entrar
        </button>

        <button type="button" className="btn secondary">
          Continuar con Google
        </button>
      </form>

      <div className="auth-links">
        <a href="#" className="link-text">
          Crear cuenta
        </a>
        <a href="#" className="link-text">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
