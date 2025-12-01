import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");

    try {
      await sendPasswordResetEmail(auth, email, {
  url: "https://mi-proyecto-react-52faa.web.app/reset-password",
  handleCodeInApp: true,
});

      setMsg("Te enviamos un enlace para restablecer tu contraseña.");
    } catch (error) {
      if (error.code === "auth/user-not-found")
        setErr("Este correo no está registrado.");
      else setErr("Error enviando el correo.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center"
         style={{ minHeight: "90vh" }}>
      <div className="col-md-5">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">

            <h2 className="text-center mb-4 fw-bold">Recuperar contraseña</h2>

            {err && <div className="alert alert-danger">{err}</div>}
            {msg && <div className="alert alert-info">{msg}</div>}

            <form onSubmit={handleSubmit}>
              <input type="email"
                className="form-control mb-3"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

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
