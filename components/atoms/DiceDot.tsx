import React from 'react';
import { StyleSheet, View } from 'react-native';

const DiceDot = ({ visible = true }) => {
  if (!visible) return <View style={styles.dotInvisible} />;
  return <View style={styles.dot} />;
};

const styles = StyleSheet.create({
  dot: {
    width: '25%',
    height: '30%',
    backgroundColor: '#e74c3c',
    borderRadius: 100,
    margin: 4,
  },
  dotInvisible: {
    width: '25%',
    height: '30%',
    margin: 4,
  },
});

export default DiceDot;