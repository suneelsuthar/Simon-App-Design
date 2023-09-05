import React, { useEffect, useCallback } from "react";
import { StyleSheet,  LogBox, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Navigation from './src/Navigation'
LogBox.ignoreAllLogs();
export default function App() {
  let [fontsLoaded] = useFonts({
    "HelveticaNeueLight": require("./assets/Fonts/HelveticaNeueLight.ttf"),
    "HelveticaNeueMedium": require("./assets/Fonts/HelveticaNeueMedium.ttf"),
    "HelveticaNeueCondensedBold": require("./assets/Fonts/HelveticaNeueCondensedBold.ttf"),
    "HelveticaNeueBold": require("./assets/Fonts/HelveticaNeueBold.ttf"),
    "Helvetica-Neue-Regular":require('./assets/Fonts/Helvetica-Neue-Regular.otf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

