import Header from "../../components/Header";

export default function ForgotPage() {
  return (
    <>
      <Header />

      <div className="layout-container">
        <div className="layout-content">

          <h2>¿Olvidaste tu contraseña?</h2>

          <p>
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <label>Correo electrónico</label>
          <input type="email" placeholder="ejemplo@correo.com" />

          <button>Enviar enlace</button>

          <p style={{ marginTop: "1rem" }}>
            <a href="/login">Volver al inicio de sesión</a>
          </p>

        </div>
      </div>
    </>
  );
}
