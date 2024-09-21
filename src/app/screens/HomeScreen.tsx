import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  MyErrorMessage,
  MyHeader,
  MyImageSlider,
  MyLoading,
  MySafeArea,
  MySearchBar,
} from "../components";
import icons from "../constants/icons";
import colors from "../constants/colors";
import {
  fetchBeautyProducts,
  fetchCategories,
  fetchLaptopProducts,
  // fetchEProduct,
  // fetchMenClothingProduct,
  fetchProducts,
} from "../api/apiClient";
import ProductSection from "../components/Home/ProductSection";
import { Categories } from "../types/product";
import { CategoryCard } from "../components/Home";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [limit, setlimit] = useState(10);
  const images = [
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/235-New-Web-1-scaled.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/iPhone-15-Pro-Max-WEBP-1-scaled.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/oppo-reno-12-Big-Banner-scaled.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/08/Galaxy-Z-flip-6-WEBP-scaled.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/08/one-plus-12-scaled.webp",
    },
  ];

  const secondSliderImages = [
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/Oneplus-King-of-the-Week.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/Samsung-Galaxy-A06_Small-Banner.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/08/Redmi-Pad-Pro_Small-Banner.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/itel-p65_v2_Small-Banner.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/08/Meizu-Note-21_Small-Banner-scaled.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/Huawei-Nova-Y62v2_Small-Banner.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/Nubia-V-60_V2_Small-Banner.webp",
    },
    {
      uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/Honor-200-Litev2_Small-Banner-scaled.webp",
    },
  ];

  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(limit),
  });

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery<Categories[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    retry: 2,
  });

  const {
    data: laptop,
    error: laptopError,
    isLoading: laptopLoading,
  } = useQuery({
    queryKey: ["laptops"],
    queryFn: () => fetchLaptopProducts(limit),
  });

  const {
    data: beauty,
    error: beautyError,
    isLoading: beautyLoading,
  } = useQuery({
    queryKey: ["beauty"],
    queryFn: () => fetchBeautyProducts(limit),
  });

  // const {
  //   data: eProducts,
  //   error: eProductsError,
  //   isLoading: eProductsLoading,
  // } = useQuery({
  //   queryKey: ["eProducts"],
  //   queryFn: fetchEProduct,
  //   retry: 2,
  // });
  // const {
  //   data: menProducts,
  //   error: menProductsError,
  //   isLoading: menProductsLoading,
  // } = useQuery({
  //   queryKey: ["menProducts"],
  //   queryFn: fetchMenClothingProduct,
  //   retry: 2,
  // });

  const isLoading = productsLoading || categoriesLoading;
  const error = productsError || categoriesError;

  if (isLoading) {
    return <MyLoading />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load data.</Text>
      </View>
    );
  }

  return (
    <MySafeArea style={styles.safeArea}>
      <View style={{ backgroundColor: colors.mainColor, marginBottom: 10 }}>
        <MyHeader leftIcon={icons.noti} rightIcon={icons.cart} />
      </View>
      <ScrollView>
        <View style={styles.searchBarContainer}>
          <MySearchBar
            onClear={() => console.log("Search cleared")}
            placeholder="Search product here"
          />
        </View>
        <View style={styles.sliderContainer}>
          <MyImageSlider
            images={images}
            sliderHeight={150}
            dotColor={colors.red}
            inactiveDotColor={colors.white}
            dotSize={10}
          />
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.slug.toString()}
            data={categories?.slice(0, 7)}
            renderItem={({ item }) => <CategoryCard category={item} />}
          />
        </View>

        <Pressable style={styles.priceListContainer}>
          <Image
            source={{
              uri: "https://anycallmobilemm.com/wp-content/uploads/2024/09/4.9.2024_Pricelist-Banner-1300x325.webp",
            }}
            style={styles.priceListImage}
            resizeMode="stretch"
          />
        </Pressable>
        {/* <ProductSection
          title="Flash Sale"
          data={products}
          onShowAll={() => console.log("Show All Flash Sales")}
        /> */}
        <ProductSection data={products} title="Products" />

        <View style={styles.secondSliderContainer}>
          <MyImageSlider
            images={secondSliderImages}
            sliderHeight={120}
            sliderWidth={width / 1.4}
            sliderMarginRight={10}
            sliderRadius={10}
            showPagination={false}
            autoPlay={false}
          />
        </View>

        <ProductSection
          title="Laptops Sales"
          loading={laptopLoading}
          // error={productsError}
          data={laptop?.products}
          onShowAll={() => console.log("Show All Laptops Sales")}
        />

        <ProductSection
          title="Beauty Sales"
          loading={beautyLoading}
          // error={productsError}
          data={beauty?.products}
          onShowAll={() => console.log("Show All Beauty Sales")}
        />
      </ScrollView>
    </MySafeArea>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchBarContainer: {
    marginHorizontal: 10,
  },
  sliderContainer: {
    marginVertical: 10,
  },
  categoriesContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  priceListContainer: {
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  priceListImage: {
    width: "100%",
    height: 125,
    borderRadius: 10,
    overflow: "hidden",
  },
  secondSliderContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBox: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
  },
});

export default HomeScreen;
