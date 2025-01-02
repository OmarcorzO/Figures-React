import React from "react";
import {
  animate,
  scroll,
} from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";
import stylus from './Componentico.module.css';

const Componentico = () => {
  React.useEffect(() => {
    const items = document.querySelectorAll("li");

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate(
        "ul",
        {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        },
        { ease: "linear" }
      ),
      { target: document.querySelector("section") }
    );

    // Progress bar representing gallery scroll
    scroll(animate(".progress", { scaleX: [0, 1] }, { ease: "linear" }), {
      target: document.querySelector("section"),
    });
  }, []);

  return (
    <div>
      <header>
        <h2 className={stylus.h2Example}>Lines of London</h2>
      </header>
      <section>
        <ul>
          <li>
            <h2 className={stylus.h2Example}>Microcertificaciones</h2>
            <p>
              Nuestras microcertificaciones permiten centrarse en áreas técnicas
              o habilidades prácticas en sectores como la tecnología, el
              marketing digital, la gestión de proyectos, entre otros.
            </p>
          </li>
          <li>
            <h2 className={stylus.h2Example}>Licenciaturas</h2>
            <p>
              Una carrera profesional es el comienzo de un viaje donde el
              aprendizaje continuo y la pasión por crecer se convierten en las
              claves del éxito y la realización personal.
            </p>
          </li>
          <li>
            <h2 className={stylus.h2Example}>Doctorados</h2>
            <p>
              El Doctorado es la culminación de un esfuerzo incansable por
              expandir los límites del conocimiento, donde la pasión por
              aprender se transforma en contribución a la sociedad.
            </p>
          </li>
          <li>
            <h2 className={stylus.h2Example}>Maestrías</h2>
            <p>
              La Maestría es el cambio hacia la especialización, donde el
              conocimiento se profundiza y las habilidades se perfeccionan para
              enfrentar los desafíos con mayor confianza y experticia.
            </p>
          </li>
          <li>
            <img src="/5.jpg" />
            <h3 className={stylus.h3Example}>#005</h3>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Componentico;
