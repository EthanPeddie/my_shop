import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./src/app/navigations/AppNavigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
