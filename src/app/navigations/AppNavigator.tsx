import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { WelcomeScreen, LoginScreen, SignUpScreen } from "../screens/index";
import route from "./route";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={route.WELCOME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={route.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={route.LOGIN} component={LoginScreen} />
        <Stack.Screen name={route.SIGNUP} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
