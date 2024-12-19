import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";

const PageWithScrollControl = () => {
  const { scrollYProgress } = useScroll();
  const ideationRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [hasFinishedAnimation, setHasFinishedAnimation] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false); // Para controlar cuándo empezar la animación

  // Animación del trazo (solo cuando isLocked es true)
  const rawPathLength = useTransform(scrollYProgress, [0.33, 0.6], [0, 1]);
  const pathLength = useSpring(rawPathLength, { stiffness: 50, damping: 20 });

  // Posición y aparición de las esferas
  const rawSpherePosition = useTransform(scrollYProgress, [0.1, 0.6], [50, 450]);
  const spherePosition = useSpring(rawSpherePosition, { stiffness: 50, damping: 20 });

  const redOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const greenOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const blueOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  // Bloqueo del bloque "Ideación"
  useEffect(() => {
    const handleScroll = () => {
      if (!ideationRef.current) return;

      const sectionTop = ideationRef.current.getBoundingClientRect().top;

      // Comienza la animación cuando el bloque "Ideation" esté completamente visible en la pantalla
      if (sectionTop === 0 && !startAnimation) {
        console.log('uwu')
        setStartAnimation(true); // Empieza la animación solo cuando la sección está completamente visible
      } else {
        setStartAnimation(false)
      }

      // Si estamos dentro de la sección "Ideation" y no se ha terminado la animación
      console.log(sectionTop)
      if (sectionTop === 0 && !hasFinishedAnimation) {
        setIsLocked(true); // Bloquear el scroll y comenzar la animación
      } else if (hasFinishedAnimation) {
        setIsLocked(false); // Desbloquear si la animación ha terminado
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasFinishedAnimation, startAnimation]);

  // Detectar final de la animación del trazo
  useEffect(() => {
    if (pathLength.get() === 1) {
      setTimeout(() => setHasFinishedAnimation(true), 500); // Retardo opcional para suavizar el desbloqueo
    }
  }, [pathLength]);

  return (
    <div>
      {/* Bloque de inicio */}
      <div
        style={{
          height: "100vh",
          background: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Inicio</h1>
      </div>

      {/* Bloque de ideación */}
      <div
        ref={ideationRef}
        style={{
          height: "100vh",
          background: "#e0f7fa", // Fondo del bloque de Ideation
          display: "flex",
          position: "sticky",
          top: 0,
          width: "100%",
        }}
      >
        {/* Solo iniciamos la animación cuando isLocked es true */}
        {isLocked && (
          <motion.div style={{ width: "100%" }}>
            <motion.svg
              width="100%"
              height="300"
              viewBox="0 0 3000 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Trazo principal animado */}
              <motion.path
                d="M5 350 C150 50, 350 50, 450 250 C550 450, 650 450, 750 250 C850 50, 1050 50, 1150 250"  // Trazo extendido con varias olas
                stroke="black"
                fill="transparent"
                strokeWidth="2"
                style={{
                  pathLength,
                }}
              />

              {/* Esfera Roja */}
              <motion.circle
                cx="5"
                cy="250"
                r="10"
                fill="red"
                style={{
                  cx: spherePosition,
                  opacity: redOpacity,
                }}
              />

              {/* Esfera Verde */}
              <motion.circle
                cx="5"
                cy="250"
                r="10"
                fill="green"
                style={{
                  cx: spherePosition,
                  opacity: greenOpacity,
                }}
              />

              {/* Esfera Azul */}
              <motion.circle
                cx="5"
                cy="250"
                r="10"
                fill="blue"
                style={{
                  cx: spherePosition,
                  opacity: blueOpacity,
                }}
              />
            </motion.svg>
          </motion.div>
        )}
      </div>

      {/* Bloque final */}
      <div
        style={{
          height: "100vh",
          background: "#dcedc8", // Fondo del bloque Final
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Final</h1>
      </div>
    </div>
  );
};

export default PageWithScrollControl;
