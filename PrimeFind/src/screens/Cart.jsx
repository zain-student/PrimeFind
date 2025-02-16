import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Cart = ({ route }) => {
  const { product } = route.params; // Get the product data passed from HomeScreen
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="rgba(5,4,5,0.4)"
        translucent={true}
      />
      {/* <Text>Cart</Text> */}
      {/* <Text style={styles.title}>Product Details</Text> */}
      <View style={styles.productContainer}>
        <View style={styles.cartAdded}>
          <Image
            source={{ uri: product.image || "https://via.placeholder.com/150" }} // Fallback image
            style={styles.productImage}
            // resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={styles.price}>Rs: {product.price}</Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Icon name="delete" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColorLight,
  },
  productContainer: {
    backgroundColor: "#fff",
    width: "95%",
    height: 110,
    // borderWidth: 1,
    borderRadius: 5,

    alignSelf: "center",
    marginTop: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 7,
  },
  cartAdded: {
    flexDirection: "row",
    alignItems: "center",
    // flex: 1,
    // justifyContent: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    // borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  title: {
    fontSize: 13,
    color: Colors.fontColorDark,
    alignSelf: "flex-start",
  },
  price: {
    fontSize: 13,
    color: Colors.fontColorDark,
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 8,
  },
});
