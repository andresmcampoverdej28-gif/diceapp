import d6 from "@/assets/models/Dice.glb";
import { Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Group } from 'three';
import type { GLTF } from 'three-stdlib';


interface Dice3DProps {
  isRolling: boolean;
  targetRotation?: [number, number, number];
  size?: number;
}

// Tipar correctamente el resultado de useGLTF
type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

// Componente interno del dado con animación
function DiceModel({ isRolling }: { isRolling: boolean }) {
  const groupRef = useRef<Group>(null);
  
  // Solución: Hacer un cast explícito del tipo
  const gltf = useGLTF(require('@/assets/models/Dice.glb')) as GLTFResult;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (isRolling) {
      // Cuando está lanzando, girar rápido
      groupRef.current.rotation.x += delta * 8;
      groupRef.current.rotation.y += delta * 8;
      groupRef.current.rotation.z += delta * 8;
    } else {
      // Cuando NO está lanzando, rotar suavemente
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
        
        <DiceModel isRolling={isRolling} />
        
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