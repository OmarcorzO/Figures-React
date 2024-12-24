import React, { useEffect } from 'react';
import './ScrollTextEffect.css';

const ScrollTextEffect = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    // Crear un observer para detectar la visibilidad de las secciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const section = entry.target;

        // Verificamos si la sección está visible
        if (section) {
          if (entry.isIntersecting) {
            section.classList.add('visible'); // Añadimos la clase visible a la sección
          } else {
            section.classList.remove('visible'); // La quitamos cuando la sección no está visible
          }
        }
      });
    }, { threshold: 0.3 });

    // Comenzamos a observar cada sección
    sections.forEach(section => {
      observer.observe(section);
    });

    // Limpieza de los observadores al desmontar el componente
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="content">
      <div className="section sticky">
        <h2>Microcertificaciones</h2>
        <p>
          Nuestras microcertificaciones permiten centrarse en áreas técnicas o habilidades prácticas en sectores como la tecnología, el marketing digital, la gestión de proyectos, entre otros.
        </p>
      </div>
      <div className="section">
        <h2>Licenciaturas</h2>
        <p>
          Una carrera profesional es el comienzo de un viaje donde el aprendizaje continuo y la pasión por crecer se convierten en las claves del éxito y la realización personal.
        </p>
      </div>
      <div className="section">
        <h2>Doctorados</h2>
        <p>
          El Doctorado es la culminación de un esfuerzo incansable por expandir los límites del conocimiento, donde la pasión por aprender se transforma en contribución a la sociedad.
        </p>
      </div>
      <div className="section">
        <h2>Maestrías</h2>
        <p>
          La Maestría es el cambio hacia la especialización, donde el conocimiento se profundiza y las habilidades se perfeccionan para enfrentar los desafíos con mayor confianza y experticia.
        </p>
      </div>
    </div>
  );
};

export default ScrollTextEffect;
