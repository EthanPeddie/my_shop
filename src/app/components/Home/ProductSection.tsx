import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import icons from "../../constants/icons";
import ProductCard from "./ProductCard";
import colors from "../../constants/colors";
import { Products } from "../../types/product";
import MyLoading from "../MyLoading";

interface Props {
  title?: string;
  data: Products[];
  onShowAll?: () => void;
  loading?: boolean;
  error?: string | null;
}

const ProductSection = ({ title, data, onShowAll, loading, error }: Props) => {
  return (
    <View style={styles.saleContainer}>
      <View style={styles.saleTitleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.secondTitleContainer} onPress={onShowAll}>
          <Text style={styles.secondtitle}>Show All</Text>
          <Image source={icons.right} style={styles.iconStyle} />
        </Pressable>
      </View>
      {loading ? (
        <MyLoading size={20} borderRadius={10} />
      ) : error ? (
        ""
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={data || []}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  saleContainer: { marginHorizontal: 10, marginBottom: 10 },
  saleTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  secondTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  secondtitle: {
    fontWeight: "400",
    color: colors.primary,
    fontSize: 15,
  },
  iconStyle: {
    width: 13,
    height: 13,
    tintColor: colors.gray,
  },
});

export default ProductSection;
