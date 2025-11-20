export default function ResetPage() {
  return (
    <div className="page-container">
      <h1>Restablecer Contraseña</h1>

      <form>
        <label>Nueva contraseña</label>
        <input type="password" />

        <label>Repetir contraseña</label>
        <input type="password" />

        <button>Guardar nueva contraseña</button>
      </form>

      <a href="#">Volver al Login</a>
    </div>
  );
}
