// src/pages/ForgotPasswordPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Por favor escribe tu correo electrónico.");
      return;
    }

    // Mensaje simulado
    setMessage(
      "Si el correo existe, te enviaremos un enlace para restablecer tu contraseña..."
    );

    // Simular espera y luego redirigir a reset password
    setTimeout(() => {
      navigate("/reset-password");
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
            <h2 className="text-center mb-4 fw-bold">Recuperar contraseña</h2>

            {message && (
              <div className="alert alert-info text-center py-2">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className="btn btn-primary w-100 py-2">
                Enviar enlace
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

export default ForgotPasswordPage;
