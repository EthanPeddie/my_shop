import React from "react";
import { Image, ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface AvatarProps {
  uri: string;
  size?: number;
  style?: ImageStyle;
}

const Avatar = ({ uri, size = 50, style }: AvatarProps) => {
  return (
    <Image
      source={{ uri }}
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "#e0e0e0",
  },
});

export default Avatar;
