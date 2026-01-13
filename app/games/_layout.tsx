import { Stack } from "expo-router";

export default function GamesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a1a2e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#1a1a2e',
        },
      }}
    >
      <Stack.Screen 
        name="dice" 
        options={{ 
          title: '🎲 Dado Virtual',
          headerShown: false // El juego tiene su propio título integrado
        }} 
      />
    </Stack>
  );
}