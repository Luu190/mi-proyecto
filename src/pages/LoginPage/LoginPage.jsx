export default function LoginPage() {
  return (
    <div className="layout-container">
      <div className="layout-content">

        <h2 className="text-center mb-3">Iniciar sesión</h2>

        <label>Correo electrónico</label>
        <input type="email" placeholder="ejemplo@correo.com" />

        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" />

        <button>Entrar</button>

        <p className="text-center mt-3">
          <a href="/register">Crear cuenta</a> • <a href="/forgot">Olvidaste tu contraseña?</a>
        </p>

      </div>
    </div>
  );
}
