import "./Trabajos.css";
import { useState } from "react";
import trabajos from "../data/trabajos";
import Modal from "../Modal";

const Trabajos = () => {
  const [categoriaSelecionada, setCategoriaSeleccionada] = useState("todos");
  const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
  const [estadoModal, setEstadoModal] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0]);

  const hadleChange = (e) => {
    const categoria = e.target.id;
    setCategoriaSeleccionada(categoria);

    /* Función para aplicar los filtros */
    if (categoria === "todos") {
      setTrabajosFiltrados(trabajos);
    } else {
      const nuevosTrabajos = trabajos.filter((trabajo) => {
        if (trabajo.categoria === categoria) {
          return true;
        }
      });
      setTrabajosFiltrados(nuevosTrabajos);
    }
  };

  /* -- Funciones para abrir y cerrar el modal -- */
  const openModal = (e, id) => {
    // Función que abre el modal
    e.preventDefault();
    setEstadoModal(true);

    const trabajo = trabajos.find((trabajo) => {
      if (trabajo.id === id) {
        return true;
      }
    });

    // console.log(trabajo)
    setTrabajoSeleccionado(trabajo);
  };

  const closeModal = () => {
    // Función que cierra el modal
    setEstadoModal(false);
  };

  return (
    <>
      <section id="trabajos" className="trabajos">
        <div className="encabezado">
          <h3 className="titulo">Mis trabajos</h3>
          <p className="subtitulo">Estos son mis proyectos</p>
        </div>

        {/* Filtros */}
        <div className="filtros">
          <label htmlFor="todos">
            <input
              type="radio"
              name="categoria"
              id="todos"
              onChange={hadleChange}
              checked={categoriaSelecionada === "todos"}
            />
            <span className="opcion">Todos</span>
          </label>
          <label htmlFor="diseno-web">
            <input
              type="radio"
              name="categoria"
              id="diseno-web"
              onChange={hadleChange}
              checked={categoriaSelecionada === "diseno-web"}
            />
            <span className="opcion">Diseño Web</span>
          </label>
          <label htmlFor="desarrollo-web">
            <input
              type="radio"
              name="categoria"
              id="desarrollo-web"
              onChange={hadleChange}
              checked={categoriaSelecionada === "desarrollo-web"}
            />
            <span className="opcion">Desarrollo Web</span>
          </label>
          <label htmlFor="aplicaciones-moviles">
            <input
              type="radio"
              name="categoria"
              id="aplicaciones-moviles"
              onChange={hadleChange}
              checked={categoriaSelecionada === "aplicaciones-moviles"}
            />
            <span className="opcion">Aplicaciones Móviles</span>
          </label>
          <label htmlFor="desarrollo-software">
            <input
              type="radio"
              name="categoria"
              id="desarrollo-software"
              onChange={hadleChange}
              checked={categoriaSelecionada === "desarrollo-software"}
            />
            <span className="opcion">Desarrollo de Software</span>
          </label>
        </div>

        {/* grilla para los trabajos */}
        <div className="grid">
          {trabajosFiltrados.map((trabajo, index) => {
            return (
              <div className="trabajo" key={trabajo.id}>
                <a
                  href="#"
                  className="thumb"
                  onClick={(e) => openModal(e, trabajo.id)}
                >
                  <img
                    loading="lazy"
                    src={trabajo.thumb.url}
                    alt={trabajo.thumb.alt}
                  />
                </a>

                <div className="info">
                  <div className="textos">
                    <a href="#" className="nombre" onClick={(e) => openModal(e, trabajo.id)}>
                      {trabajo.info.nombre}
                    </a>
                    <p className="categoria">{trabajo.info.categoria}</p>
                  </div>
                  <a href="#" className="btn-ir" onClick={(e) => openModal(e, trabajo.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -- Modal -- */}

      {/* - Condicional que evalua el estado del modal -*/}
      {estadoModal && (
        <Modal closeModal={closeModal} trabajo={trabajoSeleccionado} />
      )}
    </>
  );
};

export default Trabajos;
