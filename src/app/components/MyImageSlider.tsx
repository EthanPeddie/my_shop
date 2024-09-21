import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ViewToken,
  Pressable,
} from "react-native";

const { width } = Dimensions.get("window");

interface ImageSliderProps {
  images: Array<{ uri: string }>;
  sliderHeight?: number;
  sliderWidth?: number;
  sliderMarginRight?: number;
  sliderRadius?: number;
  dotColor?: string;
  inactiveDotColor?: string;
  dotSize?: number;
  autoSlideInterval?: number;
  showPagination?: boolean;
  autoPlay?: boolean;
  press?: () => void;
}

const MyImageSlider = ({
  images,
  sliderHeight = 200,
  sliderWidth = width,
  sliderMarginRight = 0,
  sliderRadius = 0,
  dotColor = "#fff",
  inactiveDotColor = "#888",
  dotSize = 8,
  autoSlideInterval = 3000,
  showPagination = true,
  autoPlay = true,
  press,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  ).current;

  useEffect(() => {
    if (autoPlay) {
      const slideTimer = setInterval(() => {
        let nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        setCurrentIndex(nextIndex);
      }, autoSlideInterval);

      return () => clearInterval(slideTimer);
    }
  }, [currentIndex, images.length, autoSlideInterval, autoPlay]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onViewableItemsChanged={handleViewableItemsChanged}
        renderItem={({ item }) => (
          <Pressable
            onPress={press}
            style={{
              borderRadius: sliderRadius,
              overflow: sliderRadius ? "hidden" : "visible",
              width: sliderWidth,
              marginRight: sliderMarginRight,
            }}
          >
            <Image
              source={{ uri: item.uri }}
              style={[
                styles.image,
                {
                  height: sliderHeight,
                  width: sliderWidth,
                  marginRight: sliderMarginRight,
                },
              ]}
              resizeMode="stretch"
            />
          </Pressable>
        )}
      />
      {showPagination && (
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentIndex ? dotColor : inactiveDotColor,
                  width: dotSize,
                  height: dotSize,
                },
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    borderRadius: 50,
    marginHorizontal: 4,
  },
});

export default MyImageSlider;
