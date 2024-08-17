import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
  style?: ViewStyle;
}

const MyButton = ({
  title,
  onPress,
  backgroundColor = "#2196F3",
  color = "#fff",
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MyButton;
