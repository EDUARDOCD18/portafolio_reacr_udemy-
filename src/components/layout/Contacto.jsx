import "./Contacto.css";
import { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(null);

  const regEx = {
    nombre: /^[a-zA-Z\s-]{2,}$/,
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mensaje: /^.{1,}$/,
  };

  const handleInput = (e, input) => {
    if (input === "nombre") {
      setNombre(e.target.value);
    }
    if (input === "correo") {
      setCorreo(e.target.value);
    }
    if (input === "mensaje") {
      setMensaje(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    /* - se ejecuta antes de enviar el formulario - */
    e.preventDefault();

    const nombreValido = regEx.nombre.test(nombre);
    const correoValido = regEx.correo.test(correo);
    const mensajeValido = regEx.mensaje.test(mensaje);

    /* Envalúa que el nombre esté correcto */
    if (!nombreValido) {
      setError("Por Favor, ingresa un nombre válido");
      return;
    }

    /* Envalúa que el correo esté correcto */
    if (!correoValido) {
      setError("Por Favor, ingresa un correo válido");
      return;
    }

    /* Envalúa que el mensaje esté correcto */
    if (!mensajeValido) {
      setError("Por Favor, ingresa un mensaje válido");
      return;
    }

    if (nombreValido && correoValido && mensajeValido) {
      setError(null);

      /* - Envía el formulario - */
      e.target.submit();
    }
  };

  return (
    <>
      <section className="contacto" id="contacto">
        <div className="encabezado">
          <h3 className="titulo">Haz real tu idea</h3>
          <p className="subtitulo">
            Contacta conmigo y lleva a la realidad tus ideas y proyectos.
          </p>
        </div>

        {/* -- Formulario de contacto */}
        <form
          action="https://formspree.io/f/mrejpoog"
          className="formulario"
          method="post"
          onSubmit={handleSubmit}
        >
          {/* - Nombre de la persona -- */}
          <div className="grupo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="John Doe"
              value={nombre}
              onChange={(e) => handleInput(e, "nombre")}
            />
          </div>
          {/* - Correo de la persona -- */}
          <div className="grupo-formulario">
            <label htmlFor="correo">Correo</label>
            <input
              type="text"
              name="correo"
              id="correo"
              placeholder="correo@correo.com"
              value={correo}
              onChange={(e) => handleInput(e, "correo")}
            />
          </div>
          {/* - Mensaje de la persona -- */}
          <div className="grupo-formulario mensaje">
            <label htmlFor="correo">Mensaje</label>
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder="Redacta acá tu mensaje."
              value={mensaje}
              onChange={(e) => handleInput(e, "mensaje")}
            ></textarea>
          </div>

          {/* - Mensaje de error */}
          {error && (
            <div className="grupo-formulario error">
              <p>{error}</p>
            </div>
          )}

          {/* - Botón para enviar el formulario - */}
          <div className="grupo-formulario enviar">
            <div>
              <button type="submit" className="boton">
                Enviar mensaje
                <div className="icono">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contacto;
