export default function RegisterPage() {
  return (
    <div className="layout-container">
      <div className="layout-content">

        <h2 className="text-center mb-3">Crear cuenta</h2>

        <label>Nombre completo</label>
        <input type="text" placeholder="Tu nombre y apellido" />

        <label>Correo electrónico</label>
        <input type="email" placeholder="ejemplo@correo.com" />

        <label>Contraseña</label>
        <input type="password" placeholder="Crea una contraseña" />

        <label>Repetir contraseña</label>
        <input type="password" placeholder="Repítela de nuevo" />

        <button>Registrarse</button>

        <p className="mt-3 text-center">
          ¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a>
        </p>

      </div>
    </div>
  );
}
