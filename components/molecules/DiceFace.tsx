import React from 'react';
import { View, StyleSheet, Dimensions, ViewStyle } from 'react-native';
import DiceDot from '../atoms/DiceDot';

const { width } = Dimensions.get('window');
const diceSize = width * 0.6;

interface DiceFaceProps {
  number?: number;
}

const DiceFace = ({ number = 1 }: DiceFaceProps) => {
  const dotPatterns: { [key: number]: boolean[] } = {
    1: [false, false, false, false, true, false, false, false, false],
    2: [true, false, false, false, false, false, false, false, true],
    3: [true, false, false, false, true, false, false, false, true],
    4: [true, false, true, false, false, false, true, false, true],
    5: [true, false, true, false, true, false, true, false, true],
    6: [true, false, true, true, false, true, true, false, true],
  };

  const pattern = dotPatterns[number] || dotPatterns[1];
  
  return (
    <View style={styles.diceFace}>
      <View style={styles.diceGrid}>
        {pattern.map((visible, index) => (
          <DiceDot key={index} visible={visible} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diceFace: {
    width: diceSize,
    height: diceSize,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  } as ViewStyle,
  diceGrid: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center', // ✅ CORREGIDO: era 'space-between' (inválido)
  } as ViewStyle,
});

export default DiceFace;