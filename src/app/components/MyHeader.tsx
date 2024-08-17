import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface HeaderProps {
  title: string;
  style?: ViewStyle;
}

const MyHeader = ({ title, style }: HeaderProps) => {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MyHeader;
