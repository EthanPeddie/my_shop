import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface MyTextProps {
  children: React.ReactNode;
  variant?: "header" | "subtitle" | "body" | "caption";
  style?: TextStyle;
}

const MyText = ({ children, variant = "body", style }: MyTextProps) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },
  body: {
    fontSize: 16,
    color: "#333",
  },
  caption: {
    fontSize: 12,
    color: "#888",
  },
});

export default MyText;
