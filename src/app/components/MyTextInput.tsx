import React from "react";
import { TextInput, StyleSheet, ViewStyle } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: ViewStyle;
}

const MyInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
}: InputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 10,
  },
});

export default MyInput;
