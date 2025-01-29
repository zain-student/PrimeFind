import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../components/colors/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Welcome = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/welcomeimage.jpg")}
          style={styles.image}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            marginVertical: 20,
            marginHorizontal: 23,
            textAlign: "center",
          }}>
          We Provide best quality items in a very {"\n"} reasonable {"\n"}{" "}
          Price.
        </Text>
        {/* </View> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    // backgroundColor: Colors.secondary,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "#333",
    // justifyContent: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.button,
    width: 70,
    height: 50,
    borderRadius: 15,
    // paddingBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "500",
    alignSelf: "center",
    // marginBottom: 10,
    paddingBottom: 10,
  },
});
