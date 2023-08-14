import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ShoppingCartProvider } from './src/contexts/cardShopping';

import { Routes } from './src/routes';

import { SplashArt } from './src/screens/SplashArt';

import theme from './src/theme';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => { timeout };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content' translucent />
        <ShoppingCartProvider>
          {(!fontsLoaded || showSplash) ? (
            <SplashArt />
          ) : (
            <Routes />
          )}
        </ShoppingCartProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
