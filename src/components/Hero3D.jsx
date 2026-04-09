import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.2;
      meshRef1.current.rotation.y = time * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -time * 0.15;
      meshRef2.current.rotation.z = time * 0.25;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = -time * 0.4;
      meshRef3.current.rotation.x = time * 0.2;
    }
  });

  return (
    <>
      {/* Icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef1} position={[-2, 1, 0]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#facc15" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>

      {/* Torus */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef2} position={[2, -1.5, -2]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshBasicMaterial color="#facc15" wireframe opacity={0.2} transparent />
        </mesh>
      </Float>

      {/* Octahedron */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh ref={meshRef3} position={[1, 2, -1]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshBasicMaterial color="#facc15" wireframe opacity={0.4} transparent />
        </mesh>
      </Float>
    </>
  );
};

const MouseParallax = () => {
  const { mouse, camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

export const Hero3D = () => {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full -z-10 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Geometries />
        <MouseParallax />
      </Canvas>
    </div>
  );
};
