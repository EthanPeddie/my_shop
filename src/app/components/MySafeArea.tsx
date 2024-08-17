import React from "react";
import {
  SafeAreaView as RNSafeAreaView,
  ViewStyle,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

interface SafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const MySafeArea: React.FC<SafeAreaViewProps> = ({ children, style }) => {
  return (
    <RNSafeAreaView style={[styles.safeArea, style]}>{children}</RNSafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MySafeArea;
