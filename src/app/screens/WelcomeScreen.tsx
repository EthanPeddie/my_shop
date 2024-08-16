import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import images from "../constants/images";
import colors from "../styles/colors";
import route from "../navigations/route";
import { NavigationProps } from "../types/navigation";
import icons from "../constants/icons";

const WelcomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProps>();

  const goNext = () => {
    navigation.navigate(route.LOGIN);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bgColor }]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: colors.title }]}>My Shop</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={images.WelcomBg}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.descriptionText, { color: colors.black }]}>
          My shop is a one-stop online shop for all of your needs. Buy the
          latest products from popular brands!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={icons.right}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.skipText, { color: colors.black }]}>Skip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexBasis: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "System",
  },
  imageContainer: {
    flexBasis: "40%",
  },
  image: {
    width: 300,
    height: 300,
  },
  descriptionContainer: {
    flexBasis: "15%",
    padding: 16,
  },
  descriptionText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexBasis: "20%",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.button,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WelcomeScreen;
