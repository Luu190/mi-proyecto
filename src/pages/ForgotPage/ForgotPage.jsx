import "./ForgotPage.css";

function ForgotPage() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">¿Olvidaste tu contraseña?</h2>

      <p className="auth-description">
        Ingresa tu correo electrónico y te enviaremos un enlace para
        restablecer tu contraseña.
      </p>

      <form className="auth-form">
        <div className="auth-field">
          <label className="auth-label">Correo electrónico</label>
          <input
            type="email"
            className="auth-input"
            placeholder="ejemplo@correo.com"
          />
        </div>

        <button type="button" className="btn primary">
          Enviar enlace
        </button>
      </form>

      <div className="auth-links">
        <a href="#" className="link-text">
          Volver al inicio de sesión
        </a>
      </div>
    </div>
  );
}

export default ForgotPage;
