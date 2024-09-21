import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Products } from "../../types/product";
import icons from "../../constants/icons";
import colors from "../../constants/colors";

interface Props {
  product: Products;
}

const ProductCard = ({ product }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.images[0],
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Pressable style={styles.cart}>
          <Image
            source={icons.cart}
            style={{ width: 15, height: 15, tintColor: "#F9F9F8" }}
          />
        </Pressable>
      </View>
      <View>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{product.price} USD</Text>
        <Text style={styles.oldPrice}>{product.discountPercentage} USD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 8,
    margin: 5,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 150,
    backgroundColor: "#d6ceceff",
  },
  title: {
    width: 100,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  cart: {
    backgroundColor: colors.red,
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  priceContainer: {
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    textDecorationLine: "line-through",
  },
});

export default ProductCard;
