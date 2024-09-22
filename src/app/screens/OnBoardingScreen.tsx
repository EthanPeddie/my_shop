import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";
import { onboardingData } from "../constants/onBoarding";
import route from "../navigations/route";
import { NavigationProps } from "../types/navigation";
import { MyButton, MySafeArea } from "../components";

const IMAGE_SIZE = 300;

const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastIndex = activeIndex === onboardingData.length - 1;
  const swiperRef = useRef<Swiper>(null);
  const navigation = useNavigation<NavigationProps>();

  const goLogin = () => navigation.navigate(route.LOGIN);
  const buttonTitle = isLastIndex ? "Get Started" : "Next";
  const buttonPressHandler = () => {
    if (isLastIndex) {
      goLogin();
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <MySafeArea style={styles.safeArea}>
      <View style={styles.header}>
        <View />
        <Pressable onPress={goLogin}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboardingData.map((item, index) => (
            <View key={index} style={styles.slide}>
              <View style={{}}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          ))}
        </Swiper>
        <View style={styles.buttonContainer}>
          <MyButton
            title={buttonTitle}
            backgroundColor={colors.red}
            style={styles.button}
            onPress={buttonPressHandler}
          />
        </View>
      </View>
    </MySafeArea>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 10,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  dot: {
    width: 32,
    height: 12,
    backgroundColor: colors.gray,
    borderRadius: 10,
  },
  activeDot: {
    width: 32,
    height: 12,
    backgroundColor: colors.red,
    borderRadius: 10,
  },
  skip: {
    fontSize: 18,
    fontWeight: "bold",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  description: {
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    width: "90%",
    marginVertical: 20,
  },
  button: {
    borderRadius: 20,
  },
});

export default OnBoardingScreen;
