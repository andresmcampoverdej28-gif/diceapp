import SceneLayout from '@/templates/SceneLayout';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTitle from '../atoms/AppTitle';
import DiceFace from '../molecules/DiceFace';
import InstructionBox from '../molecules/InstructionBox';

interface DiceScreenProps {
  currentNumber?: number;
  instruction?: string;
  title?: string;
  backgroundColor?: string;
}

const DiceScreen = ({ 
  currentNumber = 1,
  instruction = "¡Agita tu teléfono!",
  title = "Dado Virtual",
  backgroundColor = '#1a1a2e'
}: DiceScreenProps) => {
  return (
    <SceneLayout backgroundColor={backgroundColor}>
      <View style={styles.content}>
        <AppTitle text={title} iconName="dice" />
        <DiceFace number={currentNumber} />
        <InstructionBox text={instruction} />
      </View>
    </SceneLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    gap: 40,
  },
});

export default DiceScreen;