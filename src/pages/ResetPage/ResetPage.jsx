// src/pages/ResetPasswordPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    if (!form.password || !form.confirmPassword) {
      setError("Completa ambos campos.");
      return;
    }
    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Simulación de actualización de contraseña
    setMsg("Contraseña actualizada correctamente. Redirigiendo al login...");
    setForm({ password: "", confirmPassword: "" });

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="col-md-5">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">
            <h2 className="text-center mb-4 fw-bold">Restablecer contraseña</h2>

            {error && (
              <div className="alert alert-danger text-center py-2">{error}</div>
            )}
            {msg && (
              <div className="alert alert-success text-center py-2">{msg}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nueva contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Confirmar nueva contraseña
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-success w-100 py-2">
                Guardar nueva contraseña
              </button>
            </form>

            <div className="text-center mt-3">
              <Link to="/login">Volver al login</Link>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default ResetPasswordPage;
