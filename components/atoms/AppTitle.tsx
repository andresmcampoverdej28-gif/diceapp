import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface AppTitleProps {
  text: string;
}

const AppTitle = ({ text }: AppTitleProps) => {
  return <Text style={styles.title}>{text}</Text>;
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