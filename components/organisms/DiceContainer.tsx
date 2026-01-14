import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTitle from '../atoms/AppTitle';
import DiceFace from '../molecules/DiceFace';
import InstructionBox from '../molecules/InstructionBox';

interface DiceContainerProps {
  currentNumber?: number;
  instruction?: string;
  title?: string;
}

const DiceContainer = ({ 
  currentNumber = 1, 
  instruction = "¡Agita tu teléfono!",
  title = "Dado Virtual"
}: DiceContainerProps) => {
  return (
    <View style={styles.diceContainer}>
      <AppTitle text={title} />
      <DiceFace number={currentNumber} />
      <InstructionBox text={instruction} />
    </View>
  );
};

const styles = StyleSheet.create({
  diceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
});

export default DiceContainer;