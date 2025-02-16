import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  useColorScheme,
  TextInput,
  ScrollView,
} from "react-native";
import { getProducts } from "../services/ProductsApi";
import { getCategories } from "../services/Categories";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const colorScheme = useColorScheme();
  const data = ["Apple", "Mango", "Onion", "Banana"];
  const itemsCategories = [
    {
      id: 1,
      name: "Jewellery",
      image: require("../assets/images/jewellery.png"),
    },
    {
      id: 2,
      name: "Electronics",
      image: require("../assets/images/electronics.png"),
    },
    {
      id: 3,
      name: "Men,s",
      image: require("../assets/images/mensClothes.png"),
    },
    {
      id: 4,
      name: "Women,s",
      image: require("../assets/images/womensClothes.png"),
    },
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setProductCategories(data);
    };
    fetchCategories();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductScreen", { product: item })}>
        <Image
          source={{ uri: item.image }} // Use the image URL from the API
          style={styles.productImage}
        />
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>Rs: {item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cartAdd}
        onPress={() =>
          navigation.navigate("Cart", {
            product: item,
            quantity: 1,
          })
        }>
        <Icon name="cart-plus" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
  const categories = ({ item }) => (
    <View style={styles.categoriesView}>
      <TouchableOpacity
      // onPress={() => navigation.navigate("ProductScreen", { product: item })}
      >
        <Image
          source={item.image} // Use the image URL from the API
          style={styles.categoriesImage}
        />

        <Text style={styles.categoriesProductName}>
          {item.name}
          {/* name */}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const handleSearch = (text) => {
    setSearchText(text);
    // const filtered = data.filter((item) =>
    //   item.title.toLowerCase().includes(text.toLowerCase())
    // );
    // setFilteredData(filtered);
  };
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(5,4,5,0.4)"
          translucent={true}
        />
        <TextInput
          // ref="searchBar"
          placeholder="Search...."
          placeholderTextColor={"#000"}
          style={styles.searchBar}
          value={searchText}
          onChangeText={handleSearch}
          // onChangeText={...}
          // onSearchButtonPress={...}
          // onCancelButtonPress={...}
        />
        <Text style={{ color: "#000", fontSize: 20 }}>Categories</Text>
        {/* <ScrollView style={styles.categories} horizontal={true}> */}
        <FlatList
          data={itemsCategories}
          horizontal={true}
          renderItem={categories}
          keyExtractor={(item) => item.id.toString()}
        />
        {/* </ScrollView> */}
        <Text style={{ color: "#000", fontSize: 20 }}>SHOP BEST SELLERS</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.backgroundColorLight,
    // backgroundColor: "black",
  },
  searchBar: {
    height: 40,
    width: "auto",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    color: "#000",
  },
  // categories: {
  //   padding: 4,
  //   // flexDirection: "row",
  //   height: "45%",
  //   width: "100%",
  // },
  categoriesView: {
    // flex: 1,
    flexDirection: "row",
    margin: 5,
    // padding: 4,
    // flexDirection: "row",
    // height: 98,
    // width: 98,
    // padding: 10,
    width: 100,
    height: 250,
    // borderWidth: 1,
    // borderColor: "#ccc",
    // backgroundColor: "white",
    // borderRadius: 125,
  },
  categoriesImage: {
    width: 98,
    height: 98,
    // margin: 2,
    borderRadius: 47,
    alignSelf: "center",
    // justifyContent: "center",
  },
  categoriesProductName: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  card: {
    margin: 5,
    paddingTop: 0,
    padding: 10,
    width: "47%",
    height: "auto",
    // borderWidth: 1,
    // borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 7,
    // justifyContent: "center",
    // alignItems: "center",
  },
  cartAdd: {
    // position: "fixed",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 5,
    borderWidth: 1,
  },
  productName: {
    fontSize: 10,
    fontWeight: "500",
    alignSelf: "center",
  },
  productPrice: {
    fontSize: 16,
    color: "#5392F0",
    alignSelf: "center",
  },
  productImage: {
    width: 154,
    height: 150,
    // marginRight: 2,
    borderRadius: 8,
    alignSelf: "center",
  },
});

export default HomeScreen;
