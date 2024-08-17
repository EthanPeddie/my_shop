import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface CardProps {
  title: string;
  content: string;
  style?: ViewStyle;
}

const MyCard: React.FC<CardProps> = ({ title, content, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: "#333",
  },
});

export default MyCard;
