import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface DividerProps {
  thickness?: number;
  color?: string;
  style?: ViewStyle;
}

const MyDivider = ({ thickness = 1, color = "#ccc", style }: DividerProps) => {
  return (
    <View
      style={[
        styles.divider,
        { height: thickness, backgroundColor: color },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    marginVertical: 8,
  },
});

export default MyDivider;
