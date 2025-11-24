import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="home-container">
        <h1 className="home-title">Bienvenido a Mi Proyecto</h1>
        <p className="home-subtitle">
          Un espacio simple para gestionar tus cosas
        </p>

        <div className="home-grid">
          <div className="home-card">
            <h3>Perfil</h3>
            <p>Ver o editar tu información personal.</p>
            <a href="/login" className="home-btn">Entrar</a>
          </div>

          <div className="home-card">
            <h3>Configuración</h3>
            <p>Ajustes generales de tu cuenta.</p>
            <a href="/login" className="home-btn">Entrar</a>
          </div>

          <div className="home-card">
            <h3>Actividad</h3>
            <p>Últimas acciones realizadas.</p>
            <a href="/login" className="home-btn">Entrar</a>
          </div>

          <div className="home-card">
            <h3>Soporte</h3>
            <p>¿Necesitas ayuda? Estamos contigo.</p>
            <a href="/login" className="home-btn">Entrar</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
