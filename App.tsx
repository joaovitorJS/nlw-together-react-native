import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';


import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  // Carregamento das fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // Caso ainda não carregue a fonte
  if (!fontsLoaded) {
    return <AppLoading />
  } 
    
  return (
    <Background> 
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
  
}

