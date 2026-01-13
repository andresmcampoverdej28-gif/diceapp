import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
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
          name="index" 
          options={{ 
            title: 'Inicio',
            headerShown: false // Ocultar header en la pantalla principal
          }} 
        />
        <Stack.Screen 
          name="games" 
          options={{ 
            headerShown: false // Los juegos manejan su propio header
          }} 
        />
      </Stack>
    </>
  );
}