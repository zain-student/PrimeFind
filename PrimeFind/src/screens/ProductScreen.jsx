import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useColorScheme,
} from "react-native";
// import FastImage from "react-native-fast-image";
import Colors from "../components/colors/Colors";
const ProductScreen = ({ route }) => {
  const { product } = route.params; // Get the product data passed from HomeScreen
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor:
            colorScheme === "light"
              ? Colors.backgroundColorLight
              : Colors.backgroundColorDark,
        },
      ]}>
      {/* Product Image */}
      <Image
        source={{ uri: product.image || "https://via.placeholder.com/150" }} // Fallback image
        style={styles.productImage}
        // resizeMode={FastImage.resizeMode.contain}
      />

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(5,4,5,0.4)"
          translucent={true}
        />
        <Text
          style={[
            styles.productName,
            {
              color:
                colorScheme === "light" ? Colors.darkText : Colors.lightText,
            },
          ]}>
          {product.title}
        </Text>
        <Text
          style={[
            styles.productPrice,
            {
              color:
                colorScheme === "light" ? Colors.darkText : Colors.lightText,
            },
          ]}>
          Rs: {product.price}
        </Text>
        <Text
          style={[
            styles.productDescription,
            {
              color:
                colorScheme === "light" ? Colors.darkText : Colors.lightText,
            },
          ]}>
          {product.description}
        </Text>
        <Text
          style={[
            styles.productCategory,
            {
              color:
                colorScheme === "light" ? Colors.darkText : Colors.lightText,
            },
          ]}>
          Category: {product.category}
        </Text>
        <Text
          style={[
            styles.productRating,
            {
              color:
                colorScheme === "light" ? Colors.darkText : Colors.lightText,
            },
          ]}>
          Rating: {product.rating?.rate} ({product.rating?.count} reviews)
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "#888",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  productCategory: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  productRating: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProductScreen;
