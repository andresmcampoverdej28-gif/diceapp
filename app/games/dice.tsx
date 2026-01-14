import AppTitle from '@/components/atoms/AppTitle';
import InstructionBox from '@/components/molecules/InstructionBox';
import Dice3D from '@/components/organisms/Dice3D';
import useAccelerometer from '@/lib/modules/sensors/acelerometer/useAcelerometer';
import SceneLayout from '@/templates/SceneLayout';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function DiceGame() {
  const [currentNumber, setCurrentNumber] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  // Función que se ejecuta cuando se detecta agitación
  const handleShake = () => {
    if (isRolling) return; // Evitar tiradas mientras está animando

    setIsRolling(true);
    
    // Generar número aleatorio entre 1 y 6
    const newNumber = Math.floor(Math.random() * 6) + 1;
    
    // Simular un pequeño delay para dar efecto de "lanzamiento"
    setTimeout(() => {
      setCurrentNumber(newNumber);
      setIsRolling(false);
    }, 300);
  };

  // Hook del acelerómetro
  useAccelerometer({
    onShake: handleShake,
    enabled: true,
  });

  return (
    <SceneLayout backgroundColor="#1a1a2e">
      <View style={styles.content}>
        <AppTitle text="Dado Virtual"/>
        <Dice3D 
          isRolling={isRolling}
          currentNumber={currentNumber}
          size={300}
        />
        <InstructionBox text={isRolling ? "Lanzando..." : "¡Agita tu teléfono!"} />
      </View>
    </SceneLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
});