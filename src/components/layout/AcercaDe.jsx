import "./AcercaDe.css"

const AcercaDe = () => {
  return (
    <>
      <section className="acerca-de" id="acerca-de">
        <div className="grid">
          <div className="col-1">
            {/* Columna de las fotos */}
            <div className="fotos">
              <img
                src="./assets/acerca-de-1.png"
                className="foto"
                alt="Foto de mi"
              />
              <img
                src="./assets/acerca-de-2.png"
                className="foto"
                alt="Foto de pc"
              />
            </div>
          </div>

          {/* Columna de los textos que hablan sobre mí */}
          <div className="col-2">
            <h4 className="pre-titulo">Acerca de mí</h4>
            <h3 className="titulo">Por esta razón debes contratarme</h3>
            <p className="resumen">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a
              excepturi rerum nisi eum necessitatibus placeat. Voluptatibus
              incidunt a nulla? Ea consequuntur laudantium saepe commodi
              molestiae voluptas nam distinctio reprehenderit!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
              ipsum! Consequuntur voluptatum deserunt possimus, sequi obcaecati
              pariatur nulla reprehenderit harum iste, dignissimos dolore
              aspernatur itaque quisquam iure quam architecto adipisci!
            </p>

            <a href="#contacto" className="boton">
              Contácta conmigo
              <span className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcercaDe;
