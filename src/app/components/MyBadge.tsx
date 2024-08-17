import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface BadgeProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  style?: ViewStyle;
}

const MyBadge = ({
  text,
  backgroundColor = "#f00",
  color = "#fff",
  style,
}: BadgeProps) => {
  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default MyBadge;
