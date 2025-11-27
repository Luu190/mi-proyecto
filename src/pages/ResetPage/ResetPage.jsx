import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function ResetPasswordPage() {
  const [params] = useSearchParams();
  const oobCode = params.get("oobCode");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    if (!form.password || !form.confirmPassword)
      return setError("Completa ambos campos.");

    if (form.password !== form.confirmPassword)
      return setError("Las contraseñas no coinciden.");

    try {
      await confirmPasswordReset(auth, oobCode, form.password);
      setMsg("Contraseña actualizada correctamente.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setError("El enlace no es válido o expiró.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center"
         style={{ minHeight: "90vh" }}>
      <div className="col-md-5">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">

            <h2 className="text-center mb-4 fw-bold">Restablecer contraseña</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {msg && <div className="alert alert-success">{msg}</div>}

            <form onSubmit={handleSubmit}>

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Nueva contraseña"
                onChange={handleChange}
              />

              <input
                type="password"
                name="confirmPassword"
                className="form-control mb-3"
                placeholder="Confirmar contraseña"
                onChange={handleChange}
              />

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
