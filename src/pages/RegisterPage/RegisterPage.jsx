export default function RegisterPage() {
  return (
    <div className="page-container">
      <h1>Registro</h1>

      <form>
        <label>Correo electrónico</label>
        <input type="email" />

        <label>Cédula</label>
        <input type="text" />

        <label>Fecha de nacimiento</label>
        <input type="date" />

        <label>Teléfono</label>
        <input type="number" />

        <label>Contraseña</label>
        <input type="password" />

        <label>Repetir contraseña</label>
        <input type="password" />

        <button>Registrarse</button>
      </form>

      <a href="#">Volver al Login</a>
    </div>
  );
}
