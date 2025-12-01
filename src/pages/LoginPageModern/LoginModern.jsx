import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Mail, Lock, CheckCircle2 } from "lucide-react";

export default function LoginModern() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión...");
    // 🔥 Aquí luego conectamos Firebase Auth
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* IZQUIERDA */}
        <div className="hidden md:flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-indigo-600">Gestión minimalista</span>
            </div>

            <h1 className="text-5xl tracking-tight text-gray-900">
              Organiza tu día
              <br />
              <span className="text-indigo-600">con TaskFlow</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md">
              La plataforma moderna para gestionar tus tareas de forma simple y eficiente.
            </p>
          </div>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Interfaz limpia</h3>
                <p className="text-sm text-gray-600">Diseño minimalista sin distracciones</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Enfoque productivo</h3>
                <p className="text-sm text-gray-600">
                  Gestiona tu flujo de trabajo eficientemente
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA (FORM) */}
        <div className="w-full">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-10">
            <div className="mb-8">
              <h2 className="text-3xl text-gray-900 mb-2">Bienvenido</h2>
              <p className="text-gray-600">Ingresa a tu cuenta para continuar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-12 bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 h-12 bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600" />
                  Recuérdame
                </label>

                <Link
                  to="/forgot-password"
                  className="text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {/* Botón */}
              <Button
                type="submit"
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Iniciar sesión
              </Button>
            </form>

            {/* Register */}
            <div className="mt-6 text-center text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <Link className="text-indigo-600 hover:text-indigo-700" to="/register">
                Regístrate gratis
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
