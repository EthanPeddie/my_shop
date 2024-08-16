import { config } from "@tamagui/config";
import { createTamagui, TamaguiProvider } from "tamagui";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "react-native-gesture-handler";

import AppNavigator from "./src/app/navigations/AppNavigator";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <AppNavigator />
    </TamaguiProvider>
  );
}
