// src/pages/RegisterPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    idNumber: "",
    birthDate: "",
    phone: "",
    sex: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = [];

    if (!form.name) newErrors.push("El nombre es obligatorio.");
    if (!form.idNumber) newErrors.push("La cédula es obligatoria.");
    if (!form.birthDate) newErrors.push("La fecha de nacimiento es obligatoria.");
    if (!form.phone) newErrors.push("El teléfono es obligatorio.");
    if (!form.sex) newErrors.push("El sexo es obligatorio.");
    if (!form.email) newErrors.push("El email es obligatorio.");
    if (!form.password) newErrors.push("La contraseña es obligatoria.");
    if (form.password.length < 6)
      newErrors.push("La contraseña debe tener al menos 6 caracteres.");
    if (form.password !== form.confirmPassword)
      newErrors.push("Las contraseñas no coinciden.");

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccess("");

    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // 🔥 Crear usuario en Firebase
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = res.user;

      // 🔥 Guardar información extra en Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        idNumber: form.idNumber,
        birthDate: form.birthDate,
        phone: form.phone,
        sex: form.sex,
        email: form.email,
        createdAt: new Date(),
      });

      setSuccess("Registro completado correctamente.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setErrors(["Error al registrar al usuario."]);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="col-md-7 col-lg-6">
        <div className="card shadow-lg border-0">
          <div className="card-body p-4">
            <h2 className="text-center mb-4 fw-bold">Crear Cuenta</h2>

            {errors.length > 0 && (
              <div className="alert alert-danger">
                <ul className="mb-0">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {success && (
              <div className="alert alert-success text-center py-2">{success}</div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Campos existentes + email */}
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
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Cédula</label>
                <input
                  type="text"
                  name="idNumber"
                  className="form-control"
                  value={form.idNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Fecha de nacimiento</label>
                <input
                  type="date"
                  name="birthDate"
                  className="form-control"
                  value={form.birthDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Sexo</label>
                <select
                  name="sex"
                  className="form-select"
                  value={form.sex}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </select>
              </div>

              {/* Contraseñas */}
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

              <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-success w-100 py-2">Registrarse</button>
            </form>

            <div className="text-center mt-3">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
