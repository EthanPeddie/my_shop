import { Image } from "react-native";
import React from "react";
import { Button, Text, View } from "tamagui";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowRight } from "@tamagui/lucide-icons";
import { useNavigation } from "@react-navigation/native";

import images from "../constants/images";
import colors from "../styles/colors";
import route from "../navigations/route";
import { NavigationProps } from "../types/navigation";

const WelcomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProps>();

  const goNext = () => {
    navigation.navigate(route.LOGIN);
  };

  return (
    <View
      flex={1}
      backgroundColor={colors.bgColor}
      justifyContent="center"
      alignItems="center"
    >
      <View flexBasis="15%" justifyContent="center" alignItems="center">
        <Text
          fontSize={"$10"}
          fontWeight={"bold"}
          color={colors.title}
          fontFamily={"$heading"}
        >
          My Shop
        </Text>
      </View>
      <View flexBasis={"40%"}>
        <Image
          source={images.WelcomBg}
          resizeMode="cover"
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View flexBasis={"15%"} padding={"$3"}>
        <Text fontSize={"$6"} color={colors.black}>
          My shop is a one-stop online shop for all of your needs. Buy the
          latest products from popular brands!
        </Text>
      </View>
      <View flexBasis={"20%"} alignItems="center">
        <Button
          pressStyle={{ backgroundColor: colors.title }}
          width={80}
          height={80}
          borderRadius={40}
          backgroundColor={colors.button}
          icon={<ArrowRight size={"$4"} />}
          onPress={goNext}
        />
        <Text color={colors.black} marginTop={"$4"}>
          Skip
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
