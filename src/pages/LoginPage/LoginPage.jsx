// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    navigate("/dashboard");
  };

  const loginWithGoogle = () => {
    alert("Login con Google (simulado)");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="col-md-5">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">

            <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>

            {/* BOTÓN GOOGLE CORRECTO */}
            <button
              className="btn btn-light border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 py-2"
              onClick={loginWithGoogle}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width="22"
                height="22"
              />
              <span>Continuar con Google</span>
            </button>

            {/* Separador */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">o</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Error */}
            {error && (
              <div className="alert alert-danger text-center py-2">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary w-100 mt-2 py-2">
                Entrar
              </button>
            </form>

            {/* Links */}
            <div className="text-center mt-3">
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>

            <div className="text-center mt-2">
              ¿No tienes cuenta?{" "}
              <Link to="/register">Regístrate aquí</Link>
            </div>

          </div>
        </div>

        
      </div>
    </div>
  );
}

export default LoginPage;
