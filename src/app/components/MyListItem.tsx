import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface ListItemProps {
  title: string;
  description: string;
  style?: ViewStyle;
}

const MyListItem: React.FC<ListItemProps> = ({ title, description, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});

export default MyListItem;
