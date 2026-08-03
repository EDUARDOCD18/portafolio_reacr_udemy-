import "./Header.css";
import DarkModeSwitch from "../DarkModeSwitch";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2 className="titulo">Javier Eduardo</h2>
          <p className="subtitulo">Ing. en Informática</p>
        </div>

        {/* menú de navegación */}
        <nav className="navbar">
          <a href="#trabajos">Trabajos</a>
          <a href="#acerca-de">Acerca de </a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* botón de datk-mode */}
        <DarkModeSwitch />
      </header>
    </>
  );
};

export default Header;
