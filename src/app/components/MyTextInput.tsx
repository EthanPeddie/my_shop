import React from "react";
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  Text,
  View,
} from "react-native";

interface MyTextInputProps extends TextInputProps {
  label?: string;
}

const MyTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
  keyboardType,
  ...rest
}: MyTextInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: "#333",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    width: "100%",
  },
});

export default MyTextInput;
