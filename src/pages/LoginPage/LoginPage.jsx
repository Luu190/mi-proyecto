function LoginPage() {
  return (
    <div>
      <h1>Bienvenido al Login</h1>

      <form>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;   // 👈 IMPORTANTE
