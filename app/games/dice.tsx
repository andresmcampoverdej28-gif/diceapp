import DiceScreen from '@/components/organisms/DiceScreen';
import useAccelerometer from '@/lib/modules/sensors/acelerometer/useAcelerometer';
import React, { useState } from 'react';

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
    <DiceScreen 
      currentNumber={currentNumber}
      instruction={isRolling ? "🎲 Lanzando..." : "¡Agita tu teléfono!"}
      title="🎲 Dado Virtual"
      backgroundColor="#1a1a2e"
    />
  );
}