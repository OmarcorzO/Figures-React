import React, { useEffect, useRef, useState } from "react";
import { animate, inView } from "motion";
import * as motion from "motion/react-client";
import "./DynamicFooter.css";
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
  flexDirection: "column-reverse",
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

  console.log(isVisible);

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
    <div className="App">
      <div className="scroll-effect">
        <div className="animated-block" ref={animatedBlockRef}>
          <h1>
            ¿Por qué estudiar en <span className="colorG"> UVirtual </span>?
          </h1>
          <p style={{ width: "600px", margin: "auto" }}>
            <ParallaxText baseVelocity={-5}>
              Somos una universidad interesada en tú futuro profesional
            </ParallaxText>
          </p>

          {/* Numbers 
            Pendiente: Cambiar el shuffle que vimos normalito
          */}
          <div className="one">
            {isVisible && <ShuffleText key={key_1} content="35%" />}
          </div>
          <div className="two">
            {isVisible && <ShuffleText key={key_1} content="+ 1000" />}
          </div>
          <div className="three">
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
                  <h3 className="h3-box" style={{ color: "var(--colorBlue2)" }}>
                    Metodología Online Flexible
                  </h3>
                  <p
                    className="p-box"
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
                  <h3 className="h3-box">Gradúate con título profesional</h3>
                  <p className="p-box" style={{ color: "white" }}>
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
                  <h3 className="h3-box">Docentes capacitados y expertos.</h3>
                  <p className="p-box" style={{ color: "white" }}>
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

// const DynamicFooter = () => {
//   return (
//     <div className="containerReasonToStudy MuiBox-root css-0">
//       <h3 className="MuiTypography-root MuiTypography-body1 pretitleRTS size16 css-fyswvn">
//         ¿Por qué estudiar en UVirtual?
//       </h3>
//       <h1 className="MuiTypography-root MuiTypography-body1 titleRTS size60 css-fyswvn">
//         Somos una universidad interesada en tú <b>futuro profesional.</b>
//       </h1>
//       <div className="MuiStack-root counter css-e9p99g">
//         <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-18qr39d">
//           <div className="animatedMotion">
//             <h1 className="MuiTypography-root MuiTypography-body1 size70 css-9k3g9f">
//               35%
//             </h1>
//             <p className="MuiTypography-root MuiTypography-body1 size25 css-fyswvn">
//               de nuestros estudiantes ocupan puestos de liderazgo.
//             </p>
//           </div>
//         </div>
//         <div
//           className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-fy02gk"
//           role="separator"
//           aria-orientation="vertical"
//         ></div>
//         <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-18qr39d">
//           <div className="animatedMotion">
//             <h1 className="MuiTypography-root MuiTypography-body1 size70 css-1fooiks">
//               +1000
//             </h1>
//             <p className="MuiTypography-root MuiTypography-body1 size25 css-fyswvn">
//               estudiantes de distintas áreas de estudio.
//             </p>
//           </div>
//         </div>
//         <div
//           className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-fy02gk"
//           role="separator"
//           aria-orientation="vertical"
//         ></div>
//         <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-18qr39d">
//           <div className="animatedMotion">
//             <h1 className="MuiTypography-root MuiTypography-body1 size70 css-9k3g9f">
//               +60
//             </h1>
//             <p className="MuiTypography-root MuiTypography-body1 size25 css-fyswvn">
//               ofertas acádemicas entre cursos, pregrados y doctorados.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="MuiStack-root css-1lmax47">
//         <div className="MuiBox-root css-1wiuyfs">
//           <div className="animatedMotion">
//             <div className="containerCardInfo MuiBox-root css-rntbt1">
//               <svg
//                 width="60px"
//                 height="60px"
//                 viewBox="0 0 60 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle
//                   cx="30"
//                   cy="30"
//                   r="29"
//                   stroke="#3C70BA"
//                   stroke-width="2"
//                 ></circle>
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M20.1933 18.3661C20.6815 18.8543 20.6815 19.6457 20.1933 20.1339C18.9165 21.4107 17.9037 22.9265 17.2127 24.5947C16.5217 26.2629 16.166 28.0509 16.166 29.8566C16.166 31.6622 16.5217 33.4502 17.2127 35.1185C17.9037 36.7867 18.9165 38.3025 20.1933 39.5793C20.6815 40.0674 20.6815 40.8589 20.1933 41.347C19.7052 41.8352 18.9137 41.8352 18.4256 41.347C16.9166 39.8381 15.7196 38.0467 14.903 36.0752C14.0863 34.1036 13.666 31.9906 13.666 29.8566C13.666 27.7226 14.0863 25.6095 14.903 23.638C15.7196 21.6664 16.9166 19.8751 18.4256 18.3661C18.9137 17.878 19.7052 17.878 20.1933 18.3661ZM39.6387 18.3661C40.1269 17.878 40.9183 17.878 41.4065 18.3661C42.9154 19.8751 44.1124 21.6664 44.929 23.638C45.7457 25.6095 46.166 27.7226 46.166 29.8566C46.166 31.9906 45.7457 34.1036 44.929 36.0752C44.1124 38.0467 42.9154 39.8381 41.4065 41.347C40.9183 41.8352 40.1269 41.8352 39.6387 41.347C39.1505 40.8589 39.1506 40.0674 39.6387 39.5793C40.9155 38.3025 41.9283 36.7867 42.6194 35.1185C43.3104 33.4502 43.666 31.6622 43.666 29.8566C43.666 28.0509 43.3104 26.2629 42.6194 24.5947C41.9283 22.9265 40.9155 21.4107 39.6387 20.1339C39.1506 19.6457 39.1505 18.8543 39.6387 18.3661ZM24.9065 23.0809C25.3947 23.569 25.3948 24.3605 24.9067 24.8487C23.5788 26.177 22.8329 27.9783 22.8329 29.8566C22.8329 31.7348 23.5788 33.5361 24.9067 34.8644C25.3948 35.3527 25.3947 36.1441 24.9065 36.6322C24.4183 37.1203 23.6268 37.1202 23.1387 36.6319C21.3421 34.8348 20.3329 32.3977 20.3329 29.8566C20.3329 27.3154 21.3421 24.8783 23.1387 23.0812C23.6268 22.593 24.4183 22.5929 24.9065 23.0809ZM34.9255 23.0809C35.4138 22.5929 36.2052 22.593 36.6933 23.0812C38.4899 24.8783 39.4992 27.3154 39.4992 29.8566C39.4992 32.3977 38.4899 34.8348 36.6933 36.6319C36.2052 37.1202 35.4138 37.1203 34.9255 36.6322C34.4373 36.1441 34.4372 35.3527 34.9253 34.8644C36.2532 33.5361 36.9992 31.7348 36.9992 29.8566C36.9992 27.9783 36.2532 26.177 34.9253 24.8487C34.4372 24.3605 34.4373 23.569 34.9255 23.0809ZM29.916 29.4399C29.8055 29.4399 29.6995 29.4838 29.6214 29.562C29.5433 29.6401 29.4994 29.7461 29.4994 29.8566C29.4994 29.9671 29.5433 30.0731 29.6214 30.1512C29.6995 30.2293 29.8055 30.2732 29.916 30.2732C30.0265 30.2732 30.1325 30.2293 30.2106 30.1512C30.2888 30.0731 30.3327 29.9671 30.3327 29.8566C30.3327 29.7461 30.2888 29.6401 30.2106 29.562C30.1325 29.4838 30.0265 29.4399 29.916 29.4399ZM27.8536 27.7942C28.4006 27.2472 29.1425 26.9399 29.916 26.9399C30.6896 26.9399 31.4314 27.2472 31.9784 27.7942C32.5254 28.3412 32.8327 29.083 32.8327 29.8566C32.8327 30.6301 32.5254 31.372 31.9784 31.919C31.4314 32.4659 30.6896 32.7732 29.916 32.7732C29.1425 32.7732 28.4006 32.4659 27.8536 31.919C27.3067 31.372 26.9994 30.6301 26.9994 29.8566C26.9994 29.083 27.3067 28.3412 27.8536 27.7942Z"
//                   fill="#3C70BA"
//                 ></path>
//                 <path
//                   d="M30.666 30C30.666 30.5523 30.2183 31 29.666 31C29.1137 31 28.666 30.5523 28.666 30C28.666 29.4477 29.1137 29 29.666 29C30.2183 29 30.666 29.4477 30.666 30Z"
//                   fill="#3C70BA"
//                 ></path>
//               </svg>
//               <h3 className="MuiTypography-root MuiTypography-body1 titleCardInfo size25 css-650n4t">
//                 Metodología online flexible
//               </h3>
//               <p className="MuiTypography-root MuiTypography-body1 descriptionCardInfo size20 css-uehdj2">
//                 Con nuestra metodología en línea flexible, el aprendizaje se
//                 adapta a tu vida, no al revés. Aprovecha la libertad de estudiar
//                 cuando y donde quieras, para alcanzar tus objetivos educativos
//                 sin comprometer tu estilo de vida.
//               </p>
//             </div>
//           </div>
//           <div className="animatedMotion">
//             <div className="containerCardInfo MuiBox-root css-10r5xer">
//               <svg
//                 width="60px"
//                 height="60px"
//                 viewBox="0 0 60 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle
//                   cx="30"
//                   cy="30"
//                   r="29"
//                   stroke="#ffffff"
//                   stroke-width="2"
//                 ></circle>
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M24.3419 15H35.6581C37.5656 15 39.1047 15 40.3144 15.1633C41.5702 15.3307 42.6279 15.6935 43.4679 16.5321C44.3079 17.3721 44.6679 18.4298 44.8381 19.6856C45 20.8953 45 22.4344 45 24.3419V30.0767C45 31.9842 45 33.5233 44.8381 34.733C44.6679 35.9888 44.3079 37.0465 43.4679 37.8865C42.773 38.5814 41.926 38.9512 40.934 39.1521C40.3784 39.2586 39.8161 39.3266 39.2512 39.3558L39.2609 39.3781C39.6419 40.2712 39.3167 41.3107 38.4516 41.8005C38.2225 41.9215 37.9734 42 37.7163 42.0321C37.5126 42.0628 37.2558 42.0879 36.9726 42.1158L36.9446 42.1186C36.8034 42.1321 36.6624 42.1489 36.5219 42.1688C36.5048 42.1751 36.4892 42.1845 36.4758 42.1967C36.4691 42.2028 36.4635 42.2098 36.4591 42.2177C36.4403 42.3443 36.4245 42.4713 36.4116 42.5986L36.4088 42.6265C36.3809 42.8972 36.3544 43.1456 36.3209 43.3451C36.2854 43.6056 36.1996 43.8568 36.0684 44.0847C35.5451 44.9316 34.5028 45.1926 33.646 44.8563C33.412 44.7568 33.1964 44.6186 33.0084 44.4474C32.8189 44.2801 32.6337 44.1079 32.453 43.9312L30 41.58L27.547 43.9312C27.3377 44.1321 27.1507 44.3107 26.9916 44.4474C26.8037 44.6191 26.5881 44.7578 26.354 44.8577C25.4972 45.1926 24.4549 44.9316 23.9316 44.0847C23.8009 43.8567 23.7156 43.6055 23.6805 43.3451C23.6429 43.1071 23.6131 42.8679 23.5912 42.6279L23.587 42.6C23.5746 42.4722 23.5592 42.3447 23.5409 42.2177C23.5365 42.2099 23.5308 42.2028 23.5242 42.1967C23.5108 42.1845 23.4952 42.1751 23.4781 42.1688C23.3371 42.1489 23.1957 42.1321 23.054 42.1186L23.026 42.1158C22.7428 42.0879 22.4874 42.0628 22.2837 42.0321C22.0266 41.9998 21.7775 41.9214 21.5484 41.8005C21.1379 41.5682 20.8279 41.1921 20.6785 40.7447C20.529 40.2974 20.5506 39.8105 20.7391 39.3781L20.7488 39.3558C20.237 39.3284 19.7273 39.2706 19.2223 39.1828C18.1647 38.9874 17.2647 38.6191 16.5321 37.8851C15.6921 37.0465 15.3321 35.9874 15.1633 34.7316C15 33.5233 15 31.9842 15 30.0767V24.3419C15 22.4344 15 20.8953 15.1633 19.6856C15.3307 18.4298 15.6935 17.3721 16.5321 16.5321C17.3721 15.6921 18.4298 15.3321 19.6856 15.1633C20.8953 15 22.4344 15 24.3419 15ZM22.6507 37.32L23.7893 36.2288L24.7786 35.2381C24.8653 33.9123 25.4532 32.6692 26.4228 31.7609C27.3925 30.8526 28.6714 30.3472 30 30.3472C31.3286 30.3472 32.6075 30.8526 33.5772 31.7609C34.5468 32.6692 35.1347 33.9123 35.2214 35.2381L36.2121 36.2288L37.4121 37.38V37.32C38.7879 37.306 39.7702 37.253 40.5167 37.1023C41.234 36.9558 41.6637 36.7298 41.9874 36.406C42.374 36.0195 42.6251 35.4781 42.7633 34.4526C42.9042 33.3991 42.907 32.0023 42.907 30V24.4186C42.907 22.4163 42.9042 21.0181 42.7633 19.9647C42.6251 18.9405 42.3726 18.3991 41.9874 18.0126C41.6009 17.626 41.0595 17.3749 40.034 17.2367C38.9805 17.0958 37.5837 17.093 35.5814 17.093H24.4186C22.4163 17.093 21.0181 17.0958 19.9647 17.2367C18.9405 17.3749 18.3991 17.6274 18.0126 18.0126C17.626 18.3991 17.3749 18.9405 17.2367 19.966C17.0958 21.0167 17.093 22.4149 17.093 24.4186V30C17.093 32.0023 17.0958 33.4005 17.2367 34.454C17.3749 35.4781 17.6274 36.0195 18.0126 36.406C18.3516 36.7451 18.8107 36.9781 19.6005 37.1247C20.3526 37.2628 21.3223 37.306 22.6507 37.32ZM34.7665 37.7428C34.1955 38.9974 33.1541 39.9773 31.867 40.4707L33.8819 42.4019C34.0605 42.5735 34.1874 42.6949 34.2865 42.7842C34.2991 42.6781 34.3144 42.547 34.3312 42.3767L34.3381 42.307C34.366 42.0502 34.3967 41.7474 34.5028 41.4726C34.7372 40.8656 35.2256 40.4065 35.8284 40.193C36.0991 40.0967 36.3991 40.0674 36.6684 40.0423C36.8177 40.0282 36.9671 40.0133 37.1163 39.9977L36.8177 39.7102L34.7665 37.7428ZM30.0419 38.7195L30 38.6805L29.9581 38.7209C29.1292 38.7099 28.3382 38.3714 27.7579 37.7794C27.1776 37.1873 26.855 36.3898 26.8605 35.5607C26.8661 34.7317 27.1993 33.9386 27.7874 33.3543C28.3756 32.77 29.171 32.4421 30 32.4421C30.829 32.4421 31.6244 32.77 32.2126 33.3543C32.8007 33.9386 33.1339 34.7317 33.1395 35.5607C33.145 36.3898 32.8224 37.1873 32.2421 37.7794C31.6618 38.3714 30.8708 38.7085 30.0419 38.7195ZM28.133 40.4707L26.1181 42.4019C25.9395 42.5735 25.8126 42.6949 25.7135 42.7842C25.6972 42.6485 25.6823 42.5127 25.6688 42.3767L25.6619 42.307C25.634 42.0502 25.6033 41.7474 25.4972 41.4726C25.3819 41.1761 25.2036 40.9083 24.9748 40.6874C24.7459 40.4665 24.4719 40.2978 24.1716 40.193C23.8987 40.109 23.6167 40.0584 23.3316 40.0423C23.1827 40.0284 23.0339 40.0135 22.8851 39.9977C22.9633 39.9195 23.0609 39.826 23.1823 39.7102L25.2335 37.7428C25.8045 38.9974 26.8459 39.9773 28.133 40.4707ZM24.7674 21.6279C24.7674 21.3504 24.8777 21.0842 25.074 20.8879C25.2702 20.6917 25.5364 20.5814 25.814 20.5814H34.186C34.4636 20.5814 34.7298 20.6917 34.926 20.8879C35.1223 21.0842 35.2326 21.3504 35.2326 21.6279C35.2326 21.9055 35.1223 22.1716 34.926 22.3679C34.7298 22.5642 34.4636 22.6744 34.186 22.6744H25.814C25.5364 22.6744 25.2702 22.5642 25.074 22.3679C24.8777 22.1716 24.7674 21.9055 24.7674 21.6279ZM21.9767 26.5116C21.9767 26.2341 22.087 25.9679 22.2833 25.7716C22.4795 25.5754 22.7457 25.4651 23.0233 25.4651H36.9767C37.2543 25.4651 37.5205 25.5754 37.7167 25.7716C37.913 25.9679 38.0233 26.2341 38.0233 26.5116C38.0233 26.7892 37.913 27.0554 37.7167 27.2516C37.5205 27.4479 37.2543 27.5581 36.9767 27.5581H23.0233C22.7457 27.5581 22.4795 27.4479 22.2833 27.2516C22.087 27.0554 21.9767 26.7892 21.9767 26.5116Z"
//                   fill="#ffffff"
//                 ></path>
//               </svg>
//               <h3 className="MuiTypography-root MuiTypography-body1 titleCardInfo size25 css-5dfxdb">
//                 Gradúate con título profesional.
//               </h3>
//               <p className="MuiTypography-root MuiTypography-body1 descriptionCardInfo size20 css-5dfxdb">
//                 Gradúate con un título profesional que te abrirá puertas
//                 ilimitadas de oportunidades en el mundo profesional. En
//                 UVirtual, te ayudamos a forjar un camino brillante hacia el
//                 éxito y el logro de tus metas profesionales.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="animatedMotion">
//           <div className="containerCardInfo MuiBox-root css-lbob88">
//             <svg
//               width="60px"
//               height="60px"
//               viewBox="0 0 60 60"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle
//                 cx="30"
//                 cy="30"
//                 r="29"
//                 stroke="#fff"
//                 stroke-width="2"
//               ></circle>
//               <path
//                 d="M42.3583 17.332H16.9737C16.3617 17.332 15.7747 17.5752 15.3419 18.0079C14.9091 18.4407 14.666 19.0277 14.666 19.6397V40.409C14.666 41.021 14.9091 41.608 15.3419 42.0407C15.7747 42.4735 16.3617 42.7166 16.9737 42.7166H18.905C19.1233 42.7167 19.3372 42.6548 19.5218 42.5381C19.7064 42.4215 19.8541 42.2548 19.9477 42.0575C20.5088 40.8729 21.3947 39.8719 22.5023 39.171C23.6099 38.47 24.8937 38.0979 26.2045 38.0979C27.5152 38.0979 28.7991 38.47 29.9067 39.171C31.0143 39.8719 31.9001 40.8729 32.4612 42.0575C32.5548 42.2548 32.7025 42.4215 32.8871 42.5381C33.0717 42.6548 33.2856 42.7167 33.504 42.7166H42.3583C42.9704 42.7166 43.5573 42.4735 43.9901 42.0407C44.4229 41.608 44.666 41.021 44.666 40.409V19.6397C44.666 19.0277 44.4229 18.4407 43.9901 18.0079C43.5573 17.5752 42.9704 17.332 42.3583 17.332ZM22.7429 32.332C22.7429 31.6474 22.946 30.9782 23.3263 30.4089C23.7067 29.8397 24.2473 29.396 24.8798 29.134C25.5123 28.872 26.2083 28.8034 26.8798 28.937C27.5513 29.0706 28.168 29.4002 28.6522 29.8844C29.1363 30.3685 29.4659 30.9852 29.5995 31.6567C29.7331 32.3282 29.6645 33.0242 29.4025 33.6567C29.1405 34.2892 28.6969 34.8298 28.1276 35.2102C27.5584 35.5906 26.8891 35.7936 26.2045 35.7936C25.2864 35.7936 24.406 35.4289 23.7568 34.7797C23.1076 34.1305 22.7429 33.2501 22.7429 32.332ZM42.3583 40.409H34.1992C33.2356 38.7524 31.7832 37.4344 30.041 36.6359C30.9145 35.8582 31.5309 34.8333 31.8087 33.6973C32.0864 32.5612 32.0123 31.3676 31.5962 30.2746C31.1801 29.1816 30.4417 28.2409 29.4788 27.5771C28.5159 26.9134 27.374 26.5579 26.2045 26.5579C25.035 26.5579 23.8931 26.9134 22.9302 27.5771C21.9673 28.2409 21.2288 29.1816 20.8127 30.2746C20.3966 31.3676 20.3226 32.5612 20.6003 33.6973C20.878 34.8333 21.4945 35.8582 22.3679 36.6359C20.6258 37.4344 19.1733 38.7524 18.2098 40.409H16.9737V19.6397H42.3583V40.409ZM19.2814 25.409V23.1013C19.2814 22.7952 19.403 22.5018 19.6194 22.2854C19.8357 22.069 20.1292 21.9474 20.4352 21.9474H38.8968C39.2028 21.9474 39.4963 22.069 39.7127 22.2854C39.9291 22.5018 40.0506 22.7952 40.0506 23.1013V36.9474C40.0506 37.2534 39.9291 37.5469 39.7127 37.7633C39.4963 37.9797 39.2028 38.1013 38.8968 38.1013H36.5891C36.2831 38.1013 35.9896 37.9797 35.7732 37.7633C35.5568 37.5469 35.4352 37.2534 35.4352 36.9474C35.4352 36.6414 35.5568 36.3479 35.7732 36.1315C35.9896 35.9151 36.2831 35.7936 36.5891 35.7936H37.7429V24.2551H21.5891V25.409C21.5891 25.715 21.4675 26.0085 21.2511 26.2248C21.0348 26.4412 20.7413 26.5628 20.4352 26.5628C20.1292 26.5628 19.8357 26.4412 19.6194 26.2248C19.403 26.0085 19.2814 25.715 19.2814 25.409Z"
//                 fill="#fff"
//               ></path>
//             </svg>
//             <h3 className="MuiTypography-root MuiTypography-body1 titleCardInfo size25 css-5dfxdb">
//               Docentes capacitados y expertos.
//             </h3>
//             <p className="MuiTypography-root MuiTypography-body1 descriptionCardInfo size20 css-5dfxdb">
//               Nuestros docentes, altamente capacitados y con experiencia, son el
//               corazón de la excelencia educativa. Con su guía experta, te
//               brindarán las herramientas y conocimientos necesarios para
//               alcanzar tus metas académicas y profesionales.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default DynamicFooter;
