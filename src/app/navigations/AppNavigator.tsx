import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, OnBoardingScreen } from "../screens";
import TabNavigator from "./TabNavigator";
import route from "./route";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={route.OnBoarding}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name={route.LOGIN} component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
