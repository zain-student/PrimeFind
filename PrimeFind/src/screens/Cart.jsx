import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ip } from "../../constants";
import { getToken } from "../components/colors/AuthFunctions";
import axios from "axios";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Cart = ({ cart, setCart }) =>
  // { route }

  {
    // const { product } = route.params; // Get the product data passed from HomeScreen
    const getCartItems = async () => {
      // const [isLoading, setIsLoading] = useState(true);
      try {
        const token = await getToken();
        console.log(token);
        console.log(Ip);
        const response = await axios.get(`http://${Ip}/cart/carts`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.length === 0) {
            return;
          }
          setCart(response.data);
        }
        // return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      } finally {
        // setIsLoading(false);
      }
    };

    useEffect(() => {
      // console.log(product);
      console.log("UseEffect");
      getCartItems();
    }, []);

    const deleteCart = async (id) => {
      try {
        const token = await getToken();
        console.log(token);
        console.log(Ip);

        const response = await axios.post(
          `http://${Ip}/cart/delete/${id}`, // API URL
          {}, // Empty body (if not needed)
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        if (response.status === 200) {
          const filteredItems = cart.filter((item) => item._id !== id);
          setCart(filteredItems);
          ToastAndroid.show("Deleted Successfully", ToastAndroid.SHORT);
        }
        // return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      } finally {
        // setIsLoading(false);
      }
    };

    return (
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(5,4,5,0.4)"
          translucent={true}
        />
        {/* <Text>Cart</Text> */}
        {/* <Text style={styles.title}>Product Details</Text> */}
        {/* <View style={styles.productContainer}>
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
      </View> */}

        {cart.length > 0 &&
          cart.map((product) => (
            <View key={product._id} style={styles.productContainer}>
              <View style={styles.cartAdded}>
                <Image
                  source={{
                    uri: product.image || "https://via.placeholder.com/150",
                  }} // Fallback image
                  style={styles.productImage}
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
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => deleteCart(product._id)}>
                  <Icon name="delete" size={25} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        {cart.length === 0 && (
          <View>
            <Text style={styles.title}>No products in cart</Text>
          </View>
        )}
      </ScrollView>
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
