import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const navigateToDice = () => {
    router.push('/games/dice');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Mini Juegos</Text>
      <Pressable style={styles.button} onPress={navigateToDice}>
        <Text style={styles.buttonText}>🎲 Jugar al Dado</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    gap: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});