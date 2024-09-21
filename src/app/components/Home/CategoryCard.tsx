import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import { Categories } from "../../types/product";

interface Props {
  category: Categories;
}

const CategoryCard = ({ category }: Props) => {
  console.log("category", category.url);

  return (
    <View style={styles.categoriesList}>
      <Pressable style={styles.categoryItem}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: category.url }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text
          style={styles.categoryText}
          // numberOfLines={1}
          // ellipsizeMode="tail"
        >
          {category.name}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesList: {
    flexDirection: "row",
    gap: 10,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  iconContainer: {
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 70,
  },
  categoryText: {
    fontSize: 16,
    width: 80,
    textAlign: "center",
  },
});

export default CategoryCard;
