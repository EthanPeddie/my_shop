import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, ImageSourcePropType, Keyboard, StyleSheet } from "react-native";

import { CartScreen, HomeScreen } from "../screens";
import route from "./route";
import icons from "../constants/icons";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const useKeyboardVisibility = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};

interface TabIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}
const TabIcon = ({ source, focused }: TabIconProps) => (
  <Image
    source={source}
    style={[styles.icon, { tintColor: focused ? colors.red : colors.gray }]}
  />
);

const TabNavigator = () => {
  const isKeyboardVisible = useKeyboardVisibility();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: [
          styles.tabBar,
          { display: isKeyboardVisible ? "none" : "flex" },
        ],
      }}
    >
      <Tab.Screen
        name={route.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
          tabBarLabelStyle: [styles.tabBarLabel, { marginBottom: 5 }],
        }}
      />

      <Tab.Screen
        name={route.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.cart} focused={focused} />
          ),
          tabBarLabelStyle: [styles.tabBarLabel, { marginBottom: 5 }],
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default TabNavigator;
