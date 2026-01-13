import React from 'react';
import { View, StyleSheet } from 'react-native';
import InstructionText from '../atoms/InstructionText';

interface InstructionBoxProps {
  text: string;
}

const InstructionBox = ({ text }: InstructionBoxProps) => {
  return (
    <View style={styles.instructionBox}>
      <InstructionText text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  instructionBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default InstructionBox;