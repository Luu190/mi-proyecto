import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

export default function ResetPage() {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [stage, setStage] = useState("loading"); 
  const [error, setError] = useState("");

  // 1️⃣ Verificar el código
  useEffect(() => {
    if (!oobCode) {
      setError("Código inválido.");
      setStage("error");
      return;
    }

    verifyPasswordResetCode(auth, oobCode)
      .then((email) => {
        setEmail(email);
        setStage("ready");
      })
      .catch(() => {
        setError("El enlace expiró o es inválido.");
        setStage("error");
      });
  }, [auth, oobCode]);

  // 2️⃣ Enviar nueva contraseña
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass !== confirmPass) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPass);
      alert("Contraseña cambiada correctamente.");
      navigate("/login");
    } catch (err) {
      setError("Ocurrió un error al cambiar la contraseña.");
    }
  };

  if (stage === "loading") return <p>Validando enlace...</p>;
  if (stage === "error") return <p>{error}</p>;

  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <h2>Restablecer contraseña</h2>
      <p>Correo asociado: <strong>{email}</strong></p>

      <form onSubmit={handleSubmit}>
        <label>Nueva contraseña</label>
        <input
          type="password"
          className="form-control mb-3"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          required
        />

        <label>Confirmar contraseña</label>
        <input
          type="password"
          className="form-control mb-3"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="btn btn-primary w-100" type="submit">
          Guardar nueva contraseña
        </button>
      </form>
    </div>
  );
}
