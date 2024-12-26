import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticlesGlobe = ({ radius = 1.5, particleCount = 5000 }) => {
  const pointsRef = useRef();

  // Generar partículas sobre la superficie del globo terráqueo
  const generateSphereParticles = (count, radius) => {
    const particles = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI; // Longitud (0-360 grados)
      const phi = Math.acos(2 * Math.random() - 1); // Latitud (0-180 grados)
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles[i * 3] = x;
      particles[i * 3 + 1] = y;
      particles[i * 3 + 2] = z;
    }
    return particles;
  };

  const positions = generateSphereParticles(particleCount, radius);

  // Animación de rotación continua
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1; // Rotación lenta
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        color="#00ffff"
        size={0.01}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </Points>
  );
};

const GlobeParticles = () => {
  return (
    <Canvas style={{ height: "100vh", background: "#000" }}>
      <ambientLight intensity={0.5} />
      <ParticlesGlobe radius={1.5} particleCount={10000} />
    </Canvas>
  );
};

export default GlobeParticles;
