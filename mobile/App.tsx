import 'react-native-gesture-handler';
import React from 'react';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
/* ============ NATIVES E LIBS ============ */

import { Routes } from './src/Routes';
import theme from './src/styles/theme';
/* ============ COMPONENTS E OTHERS CREATED ============ */



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  )


}

