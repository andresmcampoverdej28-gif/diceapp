import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import DiceContainer from './DiceContainer';

interface DiceScreenProps {
  currentNumber?: number;
  instruction?: string;
  title?: string;
  backgroundColor?: string;
}

const DiceScreen = ({ 
  currentNumber = 1,
  instruction = "¡Agita tu teléfono!",
  title = "🎲 Dado Virtual",
  backgroundColor = '#1a1a2e'
}: DiceScreenProps) => {
  return (
    <View style={[styles.screen, { backgroundColor }]}>
      <StatusBar barStyle="light-content" />
      <DiceContainer 
        currentNumber={currentNumber}
        instruction={instruction}
        title={title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiceScreen;