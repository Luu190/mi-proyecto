// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <small>
        © {new Date().getFullYear()} Proyecto React – Bootcamp Programación.  
        Todos los derechos reservados.
      </small>
    </footer>
  );
}

export default Footer;
