import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  message: string;
  onRetry?: () => void;
}

const MyErrorMessage = ({ message, onRetry }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Text style={styles.retry} onPress={onRetry}>
          Tap to Retry
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  message: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  retry: {
    fontSize: 16,
    color: "blue",
  },
});

export default MyErrorMessage;
