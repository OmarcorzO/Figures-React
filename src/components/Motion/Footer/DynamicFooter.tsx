import React, { useEffect, useRef, useState } from "react";
import { animate, inView } from "motion";
import * as motion from "motion/react-client";
import styles from "./DynamicFooter.module.css";
import { ParallaxText } from "../Velocity/ScrollVelocity";
import ShuffleText from "react-shuffle-text";
import Icon1 from "../../../assets/icon-1.svg";
import Icon2 from "../../../assets/icon-2.svg";
import Icon3 from "../../../assets/icon-3.svg";

const box = {
  width: 780,
  height: 250,
  backgroundColor: "white",
  borderRadius: 10,
  paddingInline: "28px",
  paddingTop: 25,
  cursor: "pointer",
};

const box2 = {
  width: 780,
  height: 250,
  backgroundColor: "var(--colorBlue2)",
  borderRadius: 10,
  paddingInline: "28px",
  paddingTop: 25,
  cursor: "pointer",
};

const box3 = {
  width: 550,
  height: 575,
  backgroundSize: "cover",
  backgroundImage: "url(src/assets/imgGrandpa.png)",
  borderRadius: 10,
  paddingInline: "25px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column-reverse" as "column-reverse",
};

function DynamicFooter() {
  const [key_1, setKey1] = useState(0); // Cambiará el key para reiniciar el componente
  const [isVisible, setIsVisible] = useState(false);
  const animatedBlockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Al menos el 50% visible
    );

    if (animatedBlockRef.current) {
      observer.observe(animatedBlockRef.current);
    }

    return () => {
      if (animatedBlockRef.current) {
        observer.unobserve(animatedBlockRef.current);
      }
    };
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setKey1((prevKey) => prevKey + 1); // Forzamos que se vuelva a renderizar
  //   }, 2000); // Cambia este valor dependiendo de la duración de la animación

  //   return () => clearInterval(interval); // Limpieza del intervalo
  // }, []);

  // useEffect(() => {
  //   let interval;
  //   if (isVisible) {
  //     interval = setInterval(() => {
  //       setKey2((prevKey) => prevKey + 1);
  //     }, 2000); // Cambia según la duración de la animación
  //   }

  //   return () => clearInterval(interval);
  // }, [isVisible]);

  React.useEffect(() => {
    inView(".scroll-effect", (info) => {
      if (info?.target) {
        // Animate the headline
        animate(
          ".animated-block h1",
          {
            opacity: [0, 1],
            y: [50, 0],
          },
          {
            duration: 1.5,
            delay: 0.2,
          }
        );

        animate(
          ".animated-block h3",
          {
            opacity: [0, 1],
            y: [50, 0],
          },
          {
            duration: 1.5,
            delay: 0.2,
          }
        );

        animate(
          ".animated-block img",
          {
            opacity: [0, 1],
            y: [50, 0],
          },
          {
            duration: 1.5,
            delay: 0.2,
          }
        );

        // Animate the paragraph
        animate(
          ".animated-block p",
          {
            opacity: [0, 1],
            y: [50, 0],
          },
          {
            duration: 1.5,
            delay: 0.7,
          }
        );

        animate(
          info?.target,
          {
            margin: 45,
          },
          {
            duration: 0.9,
          }
        );
      }

      // This will fire when the element leaves the viewport
      return (leaveInfo) => {
        animate(
          leaveInfo.target,
          { margin: 25 },
          {
            duration: 0.2,
          }
        );
      };
    });
  }, []);

  return (
    <div className={styles["body"]}>
      <div className={styles["scroll-effect"]}>
        <div className={styles.animatedBlock} ref={animatedBlockRef}>
          <h1 className={styles.h1}>
            ¿Por qué estudiar en <span className={styles.colorG}> UVirtual </span>?
          </h1>
          <p style={{ width: "600px", margin: "auto" }}>
            <ParallaxText baseVelocity={-5}>
              Somos una universidad interesada en tú futuro profesional
            </ParallaxText>
          </p>

          {/* Numbers 
            Pendiente: Cambiar el shuffle que vimos normalito
          */}
          <div className={styles["one"]}>
            {isVisible && <ShuffleText key={key_1} content="35%" />}
          </div>
          <div className={styles["two"]}>
            {isVisible && <ShuffleText key={key_1} content="+ 1000" />}
          </div>
          <div className={styles["three"]}>
            {isVisible && <ShuffleText key={key_1} content="+ 60" />}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.5 }}
                  style={box}
                >
                  <div style={{ justifySelf: "left" }}>
                    <img
                      src={Icon1}
                      width={50}
                      height={50}
                      alt="Mi SVG feliz"
                    />
                  </div>
                  <h3 className={styles["h3-box"]} style={{ color: "var(--colorBlue2)" }}>
                    Metodología Online Flexible
                  </h3>
                  <p
                    className={styles["p-box"]}
                    style={{ color: "var(--colorGray) !important" }}
                  >
                    Con nuestra metodología en línea flexible, el aprendizaje se
                    adapta a tu vida, no al revés. Aprovecha la libertad de
                    estudiar cuando y donde quieras, para alcanzar tus objetivos
                    educativos sin comprometer tu estilo de vida.
                  </p>
                </motion.div>
              </div>

              <div style={{ marginTop: 25 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.5 }}
                  style={box2}
                >
                  <div style={{ justifySelf: "left" }}>
                    <img
                      src={Icon2}
                      width={50}
                      height={50}
                      alt="Mi SVG feliz"
                    />
                  </div>
                  <h3 className={styles["h3-box"]}>Gradúate con título profesional</h3>
                  <p className={styles["p-box"]} style={{ color: "white" }}>
                    Gradúate con un título profesional que te abrirá puertas
                    ilimitadas de oportunidades en el mundo profesional. En
                    UVirtual, te ayudamos a forjar un camino brillante hacia el
                    éxito y el logro de tus metas profesionales.
                  </p>
                </motion.div>
              </div>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                style={box3}
              >
                <div>
                  <div style={{ justifySelf: "left" }}>
                    <img
                      src={Icon3}
                      width={50}
                      height={50}
                      alt="Mi SVG feliz"
                    />
                  </div>
                  <h3 className={styles["h3-box"]}>Docentes capacitados y expertos.</h3>
                  <p className={styles["p-box"]} style={{ color: "white" }}>
                    Nuestros docentes, altamente capacitados y con experiencia,
                    son el corazón de la excelencia educativa. Con su guía
                    experta, te brindarán las herramientas y conocimientos
                    necesarios para alcanzar tus metas académicas y
                    profesionales.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicFooter;
