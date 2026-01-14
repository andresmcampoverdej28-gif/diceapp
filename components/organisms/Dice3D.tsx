import d6 from "@/assets/models/Dice.glb";
import { Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Euler, Group } from 'three';
import type { GLTF } from 'three-stdlib';


interface Dice3DProps {
  isRolling: boolean;
  currentNumber: number; // NUEVO: necesitamos recibir el número actual
  targetRotation?: [number, number, number];
  size?: number;
}

// Tipar correctamente el resultado de useGLTF
type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

// Rotaciones para cada cara del dado (en radianes)
const DICE_ROTATIONS: Record<number, [number, number, number]> = {
  1: [0, 0, 0],                    // Cara 1 al frente
  2: [0, Math.PI / 2, 0],          // Cara 2 al frente
  3: [0, 0, -Math.PI / 2],         // Cara 3 al frente
  4: [0, 0, Math.PI / 2],          // Cara 4 al frente
  5: [0, -Math.PI / 2, 0],         // Cara 5 al frente
  6: [Math.PI, 0, 0],              // Cara 6 al frente
};

// Componente interno del dado con animación
function DiceModel({ isRolling, currentNumber }: { isRolling: boolean; currentNumber: number }) {
  const groupRef = useRef<Group>(null);
  const [isStatic, setIsStatic] = useState(false);
  const [lastRollingState, setLastRollingState] = useState(isRolling);
  const [targetRotation, setTargetRotation] = useState<Euler | null>(null);
  
  const gltf = useGLTF(require('@/assets/models/Dice.glb')) as GLTFResult;

  // Detectar cuando termina de rodar y activar periodo estático
  useEffect(() => {
    if (lastRollingState && !isRolling) {
      // Acaba de terminar de rodar - establecer rotación objetivo
      const rotation = DICE_ROTATIONS[currentNumber] || DICE_ROTATIONS[1];
      setTargetRotation(new Euler(...rotation));
      setIsStatic(true);
      
      // Después de 5 segundos, permitir rotación suave
      const timer = setTimeout(() => {
        setIsStatic(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
    setLastRollingState(isRolling);
  }, [isRolling, lastRollingState, currentNumber]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isRolling) {
      // Cuando está lanzando, girar rápido
      groupRef.current.rotation.x += delta * 8;
      groupRef.current.rotation.y += delta * 8;
      groupRef.current.rotation.z += delta * 8;
    } else if (targetRotation && isStatic) {
      // Interpolar suavemente hacia la rotación objetivo
      groupRef.current.rotation.x += (targetRotation.x - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetRotation.y - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.z += (targetRotation.z - groupRef.current.rotation.z) * 0.1;
    } else if (!isStatic) {
      // Solo rotar si NO está en periodo estático
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[2, 2, 2]} position={[0, 0, 0]}>
      <primitive object={gltf.scene.clone()} />
    </group>
  );
}

// Precargar el modelo
useGLTF.preload(d6);

// Componente principal
const Dice3D = ({ 
  isRolling,
  currentNumber,
  targetRotation = [0, 0, 0],
  size = 300 
}: Dice3DProps) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        
        <ambientLight intensity={0.8} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          decay={0} 
          intensity={2} 
        />
        <pointLight 
          position={[-10, -10, -10]} 
          decay={0} 
          intensity={1} 
        />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
        />
        
        <DiceModel isRolling={isRolling} currentNumber={currentNumber} />
        
        <Environment preset="sunset" />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

export default Dice3D;