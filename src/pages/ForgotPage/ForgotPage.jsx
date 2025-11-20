export default function ForgotPage() {
  return (
    <div className="page-container">
      <h1>Recuperar Contraseña</h1>

      <form>
        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <button>Enviar enlace</button>
      </form>

      <a href="#">Volver al Login</a>
    </div>
  );
}
