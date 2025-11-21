import Header from "../../components/Header";

export default function ResetPage() {
  return (
    <>
      <Header />

      <div className="layout-container">
        <div className="layout-content">

          <h2>Restablecer contraseña</h2>

          <p>
            Escribe tu nueva contraseña y confírmala para actualizar tu acceso.
          </p>

          <label>Nueva contraseña</label>
          <input type="password" placeholder="Nueva contraseña" />

          <label>Repetir contraseña</label>
          <input type="password" placeholder="Repítela de nuevo" />

          <button>Guardar contraseña</button>

          <p style={{ marginTop: "1rem" }}>
            <a href="/login">Volver al Login</a>
          </p>

        </div>
      </div>
    </>
  );
}
