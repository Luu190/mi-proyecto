// src/pages/RegisterPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    idNumber: "",
    birthDate: "",
    phone: "",
    sex: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = [];

    if (!form.name.trim()) newErrors.push("El nombre es obligatorio.");
    if (!form.idNumber.trim()) newErrors.push("La cédula es obligatoria.");
    if (!form.birthDate) newErrors.push("La fecha de nacimiento es obligatoria.");
    if (!form.phone.trim()) newErrors.push("El teléfono es obligatorio.");
    if (!form.sex) newErrors.push("El sexo es obligatorio.");
    if (!form.password) newErrors.push("La contraseña es obligatoria.");
    if (form.password && form.password.length < 6) {
      newErrors.push("La contraseña debe tener al menos 6 caracteres.");
    }
    if (form.password !== form.confirmPassword) {
      newErrors.push("Las contraseñas no coinciden.");
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccess("");

    const validationErrors = validate();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulación de registro exitoso
    setSuccess("Registro completado correctamente. ¡Ya puedes iniciar sesión!");
    setForm({
      name: "",
      idNumber: "",
      birthDate: "",
      phone: "",
      sex: "",
      password: "",
      confirmPassword: "",
    });
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

            {/* Errores */}
            {errors.length > 0 && (
              <div className="alert alert-danger">
                <ul className="mb-0">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Éxito */}
            {success && (
              <div className="alert alert-success text-center py-2">
                {success}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} noValidate>
              {/* Nombre */}
              <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Nombre y apellido"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              {/* Cédula */}
              <div className="mb-3">
                <label className="form-label">Cédula</label>
                <input
                  type="text"
                  name="idNumber"
                  className="form-control"
                  placeholder="Número de identificación"
                  value={form.idNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Fecha de nacimiento */}
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

              {/* Teléfono */}
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Número de contacto"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Sexo */}
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
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              {/* Confirmar contraseña */}
              <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success w-100 py-2">
                Registrarse
              </button>
            </form>

            <div className="text-center mt-3">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="fw-semibold">
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default RegisterPage;
