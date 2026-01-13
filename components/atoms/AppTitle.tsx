import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppTitle = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 20,
  },
});

export default AppTitle;