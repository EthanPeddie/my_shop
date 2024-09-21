import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

interface SearchBarProps extends TextInputProps {
  style?: ViewStyle;
  inputStyle?: ViewStyle;
  placeholder?: string;
  iconColor?: string;
  onClear?: () => void;
}

const MySearchBar = ({
  style,
  inputStyle,
  placeholder = "Search...",
  iconColor = colors.gray,
  onClear,
  ...props
}: SearchBarProps) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons name="search" size={20} color={iconColor} style={styles.icon} />
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        {...props}
      />
      {props.value ? (
        <Ionicons
          name="close-circle"
          size={20}
          color={iconColor}
          style={styles.clearIcon}
          onPress={onClear}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 0.6,
    borderColor: colors.gray,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  clearIcon: {
    marginLeft: 10,
  },
});

export default MySearchBar;
