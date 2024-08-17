import React from "react";
import { ActivityIndicator, View, StyleSheet, ViewStyle } from "react-native";

interface SpinnerProps {
  size?: "small" | "large";
  color?: string;
  style?: ViewStyle;
}

const MySpinner = ({
  size = "large",
  color = "#0000ff",
  style,
}: SpinnerProps) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MySpinner;
