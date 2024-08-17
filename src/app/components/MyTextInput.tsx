import React from "react";
import {
  TextInput,
  StyleSheet,
  ViewStyle,
  KeyboardType,
  TextInputProps,
} from "react-native";

// interface InputProps {
//   placeholder: string;
//   value: string;
//   onChangeText: (text: string) => void;
//   secureTextEntry?: boolean;
//   style?: ViewStyle;
//   keyboardType?: KeyboardType;
// }

const MyTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  keyboardType,
}: TextInputProps) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
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

export default MyTextInput;
