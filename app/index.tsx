import SceneLayout from '@/templates/SceneLayout';

import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const navigateToDice = () => {
    router.push('/games/dice');
  };

  return (
    <SceneLayout>
      <View style={styles.content}>
        <View style={styles.titleContainer}>

          <Text style={styles.title}>Mini Juegos</Text>
        </View>
        
        <Pressable style={styles.button} onPress={navigateToDice}>

          <Text style={styles.buttonText}>Jugar al Dado</Text>
        </Pressable>
      </View>
    </SceneLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    gap: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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