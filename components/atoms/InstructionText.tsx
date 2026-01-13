import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface InstructionTextProps {
  text: string;
}

const InstructionText = ({ text }: InstructionTextProps) => {
  return <Text style={styles.instructionText}>{text}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 18,
    color: '#eee',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default InstructionText;