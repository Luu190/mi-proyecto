// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 LOGIN CON EMAIL Y CONTRASEÑA (REAL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      if (err.code === "auth/user-not-found")
        setError("El correo no está registrado.");
      else if (err.code === "auth/wrong-password")
        setError("Contraseña incorrecta.");
      else setError("Error al iniciar sesión.");
    }
  };

  // 🔥 LOGIN CON GOOGLE
  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Error al iniciar sesión con Google.");
    }
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

            {/* Google */}
            <button
              className="btn btn-light border w-100 d-flex align-items-center justify-content-center gap-2 mb-3 py-2"
              onClick={loginWithGoogle}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width="22"
              />
              <span>Continuar con Google</span>
            </button>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">o</span>
              <hr className="flex-grow-1" />
            </div>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <form onSubmit={handleSubmit}>
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

            <div className="text-center mt-3">
              <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
            </div>

            <div className="text-center mt-2">
              ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
