import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
  Pressable,
  ImageProps,
} from "react-native";

import images from "../constants/images";
import colors from "../constants/colors";

interface HeaderProps {
  style?: ViewStyle;
  leftIcon?: ImageProps;
  leftPress?: () => void;
  rightIcon?: ImageProps;
  rightPress?: () => void;
}

const MyHeader = ({
  style,
  leftIcon,
  leftPress,
  rightIcon,
  rightPress,
}: HeaderProps) => {
  return (
    <View style={[styles.header, style]}>
      <Image source={images.Logo} style={{ width: 200, height: 60 }} />
      <View style={{ flexDirection: "row", gap: 10 }}>
        {leftIcon && (
          <Pressable onPress={leftPress}>
            <Image source={leftIcon} style={styles.pressIcon} />
          </Pressable>
        )}
        {rightIcon && (
          <Pressable onPress={rightPress}>
            <Image source={rightIcon} style={styles.pressIcon} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  pressIcon: { width: 25, height: 25, tintColor: colors.red },
});

export default MyHeader;
