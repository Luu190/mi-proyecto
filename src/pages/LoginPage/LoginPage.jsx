export default function LoginPage() {
  return (
    <div className="page-container">
      <h1>Iniciar Sesión</h1>

      <form>
        <label>Correo electrónico</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <button>Entrar</button>
      </form>

      <div className="links">
        <a href="#">Crear cuenta</a>
        <a href="#">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
}
