import React from "react";
import { Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface ValidationErrorProps {
  message: string | undefined;
  style?: TextStyle;
}

const MyValidationError = ({ message, style }: ValidationErrorProps) => {
  if (!message) return null;

  return <Text style={[styles.errorText, style]}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: "#ff4d4d",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
});

export default MyValidationError;
