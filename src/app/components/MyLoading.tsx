import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  ActivityIndicator,
} from "react-native";

import icons from "../constants/icons";
import colors from "../constants/colors";

interface Props {
  imageSource?: ImageSourcePropType;
  size?: number;
  borderRadius?: number;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}

const MyLoading = ({
  imageSource = icons.loading,
  size = 100,
  borderRadius = 50,
  containerStyle,
  imageStyle,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.loaderContainer, { borderRadius }]}>
        {/* <Image
          source={imageSource}
          style={[
            styles.loadingImage,
            { width: size, height: size },
            imageStyle,
          ]}
        /> */}
        <ActivityIndicator
          size={"large"}
          style={{ width: 100, height: 100 }}
          color={colors.red}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  loaderContainer: {
    padding: 10,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  loadingImage: {
    resizeMode: "cover",
  },
});

export default MyLoading;
