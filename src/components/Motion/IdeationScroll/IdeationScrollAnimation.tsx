import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import "./IdeationScroll.css";

const PageWithScrollControl = () => {
  const ideationRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Paths
  const path =
    "M0.0733393 0V461.761C0.0733393 671.472 170.551 842 380.037 842C589.522 842 760 671.399 760 461.761V0H0H0.0733393ZM713.806 461.761C713.806 645.937 564.079 795.773 380.11 795.773C196.141 795.773 46.3406 645.937 46.3406 461.761V46.3008H713.806V461.761Z";

  const path_1 =
    "M330.543 470.713C354.921 470.713 374.684 450.936 374.684 426.54C374.684 402.144 354.921 382.367 330.543 382.367C306.165 382.367 286.402 402.144 286.402 426.54C286.402 450.936 306.165 470.713 330.543 470.713Z";

  const path_2 =
    "M 591.282 209.051 C 539.442 142.204 464.285 101.627 373.877 91.8679 C 286.915 82.4756 200.393 106.47 130.296 159.448 C 96.2736 185.13 67.9706 216.388 46.3401 251.536 L 46.1202 385.155 C 46.1935 384.642 46.2668 384.201 46.3401 383.761 C 69.2171 231.284 213.591 121.072 368.964 137.875 C 447.714 146.387 510.259 179.92 554.84 237.448 C 603.527 300.258 626.331 390.659 614.305 473.281 C 610.859 496.908 594.068 577.99 521.991 628.913 C 447.641 681.451 339.342 682.038 258.612 630.381 C 168.864 572.854 123.477 461.247 153.099 370.773 C 157.866 356.171 185.508 281.987 261.325 253.811 C 338.828 225.047 425.644 250.068 472.497 314.64 C 479.243 323.959 484.962 334.012 489.729 344.431 C 503.66 375.323 508.939 409.957 506.006 443.637 C 504.1 465.136 497.867 523.911 465.532 520.609 C 443.461 518.261 446.174 493.24 448.96 477.17 C 454.02 447.526 458.199 418.175 449.694 388.677 C 436.935 344.945 402.693 313.026 358.112 303.267 C 301.067 290.793 235.809 324.84 215.498 377.671 C 192.548 437.253 213.958 502.338 267.558 536.018 C 282.736 545.557 298.574 550.914 313.605 553.849 V 553.996 L 316.318 554.363 C 318.224 554.729 320.131 555.023 321.964 555.243 C 324.237 555.537 326.51 555.757 328.71 555.977 L 359.359 560.013 C 360.312 560.159 361.339 560.233 362.292 560.233 C 374.17 560.233 384.362 551.281 385.755 539.174 C 386.929 528.387 380.696 518.408 371.091 514.592 C 369.184 513.858 367.058 513.271 364.932 513.051 L 341.688 510.483 L 321.231 508.208 C 311.552 506.227 301.58 502.705 292.194 496.762 C 263.892 479.004 241.381 439.381 258.759 394.254 C 270.857 362.702 313.532 340.836 348.287 348.394 C 376.077 354.484 397.487 374.369 405.333 401.592 C 411.345 422.211 408.339 440.335 405.186 459.56 C 402.4 476.289 399.54 493.68 402.62 512.611 C 407.753 544.163 429.75 563.828 462.892 566.616 C 511.579 570.652 536.729 524.425 546.408 483.407 C 561.952 417.148 550.294 343.037 509.966 287.491 C 451.014 206.189 342.201 174.49 245.341 210.445 C 149.58 245.959 115.191 338.268 109.252 356.392 C 73.2499 466.237 126.85 600.81 233.756 669.344 C 279.583 698.695 335.382 714.985 390.888 715.131 H 391.841 C 449.62 715.131 503.88 698.401 548.754 666.703 C 635.863 605.213 656.027 508.208 660.133 479.958 C 674.064 383.908 648.401 282.648 591.428 209.124 L 591.282 209.051 Z";

  const line = "M340 420C833-414 2075-276 2299 415";

  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const springPathLength = useSpring(pathLength, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const div = ideationRef.current;
      if (div) {
        const rect = div.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsLocked(inView && !animationComplete);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationComplete]);

  return (
    <div ref={ideationRef} style={{ height: "100vh", overflowY: "scroll" }}>
      <motion.svg width="1800" height="900" viewBox="0 -60 3000 1000">
        {/* Trazo principal animado */}
        <motion.path
          d={path}
          stroke="#3C70BA"
          fill="transparent"
          strokeWidth="2"
          style={{ pathLength: springPathLength }}
          onUpdate={(latest) => {
            if (Number(latest.pathLength) >= 1) {
              setAnimationComplete(true);
            }
          }}
        />
        <motion.path
          d={path}
          stroke="transparent"
          fill="#3C70BA"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: springPathLength.get() >= 1 ? 1 : 0,
            scale: springPathLength.get() >= 1 ? 1 : 0.9,
          }}
          transition={{
            opacity: { duration: 1.3, ease: "easeOut" },
            scale: { duration: 1.3, ease: "easeOut" },
          }}
        />

        {/* Punto animado */}
        <motion.path
          d={path_1}
          stroke="#E95D0F"
          fill="transparent"
          strokeWidth="2"
          style={{ pathLength: springPathLength }}
        />
        <motion.path
          d={path_1}
          stroke="transparent"
          fill="#E95D0F"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: springPathLength.get() >= 1 ? 1 : 0,
            scale: springPathLength.get() >= 1 ? 1 : 0.9,
          }}
          transition={{
            opacity: { duration: 1.3, ease: "easeOut" },
            scale: { duration: 1.3, ease: "easeOut" },
          }}
        />

        {/* Completar la imagen */}
        <motion.path
          d={path_2}
          stroke="#3C70BA"
          fill="transparent"
          strokeWidth="2"
          style={{ pathLength: springPathLength }}
        />
        <motion.path
          d={path_2}
          stroke="transparent"
          fill="#3C70BA"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: springPathLength.get() >= 1 ? 1 : 0,
            scale: springPathLength.get() >= 1 ? 1 : 0.9,
          }}
          transition={{
            opacity: { duration: 1.3, ease: "easeOut" },
            scale: { duration: 1.3, ease: "easeOut" },
          }}
        />

        {/* Segundo trazo con esferas */}
        <motion.path
          d={line}
          stroke="#E95D0F"
          strokeWidth="4"
          fill="transparent"
          style={{ pathLength: springPathLength }}
        />

        {/* ESFERAS NO BORRAR */}
        <>
          <motion.path
            d={line}
            stroke="#E95D0F"
            strokeWidth="4"
            fill="transparent"
            style={{ pathLength: springPathLength }}
          />

          <motion.circle
            key="1"
            cx={950}
            cy={-50}
            r="130"
            fill="#E95D0F"
            style={{ pathLength: springPathLength }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 0.3 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          />

          <motion.text
            x="950"
            y="-50"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="30px"
            fontWeight="bold"
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 0.3 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          >
            <tspan x="950" dy="-15">
              Micro
            </tspan>
            <tspan x="950" dy="30">
              certificaciones
            </tspan>
          </motion.text>

          <motion.circle
            key="1"
            cx={1600}
            cy={-170}
            r="130"
            fill="#E95D0F"
            style={{ pathLength: springPathLength }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 0.8 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          />

          <motion.text
            x="1600"
            y="-170"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="30px"
            fontWeight="bold"
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 0.8 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          >
            Certificaciones
          </motion.text>

          <motion.circle
            key="1"
            cx={2250}
            cy={-80}
            r="130"
            fill="#E95D0F"
            style={{ pathLength: springPathLength }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 1.3 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          />

          <motion.text
            x="2250"
            y="-80"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="30px"
            fontWeight="bold"
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 1.3 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          >
            Diplomados
          </motion.text>

          <motion.circle
            key="1"
            cx={2800}
            cy={250}
            r="130"
            fill="#E95D0F"
            style={{ pathLength: springPathLength }}
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 1.8 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          />

          <motion.text
            x="2800"
            y="250"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="30px"
            fontWeight="bold"
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: springPathLength.get() >= 1 ? 1 : 0,
              scale: springPathLength.get() >= 1 ? 1 : 0,
            }}
            transition={{
              delay: springPathLength.get() >= 1 ? 1.8 : 0,
              duration: springPathLength.get() >= 1 ? 1 : 0,
              ease: "easeInOut",
            }}
          >
            <tspan x="2800" dy="-15">
              Programas
            </tspan>
            <tspan x="2800" dy="30">
              Académicos
            </tspan>
          </motion.text>
        </>
      </motion.svg>      
    </div>
  );
};

export default PageWithScrollControl;