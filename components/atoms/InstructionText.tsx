import React from 'react';
import { StyleSheet, Text } from 'react-native';

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
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