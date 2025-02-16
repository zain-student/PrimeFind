import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  useColorScheme,
  ImageBackground,
} from "react-native";
import React from "react";
import Colors from "../components/colors/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Welcome = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              colorScheme === "light"
                ? Colors.backgroundColorLight
                : Colors.backgroundColorDark,
          },
        ]}>
        <ImageBackground
          source={require("../assets/images/backgroundImage.png")}
          resizeMode="cover"
          style={styles.bgImage}>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor="rgba(5,4,5,0.4)"
            translucent={true}
          />
          <Image
            source={require("../assets/images/welcomeimage.jpg")}
            style={
              styles.image
              //   [
              //   {
              //     borderColor:
              //       colorScheme === "light" ? Colors.darkText : Colors.lightText,
              //   },
              // ]
            }
          />
          <Text
            style={
              styles.text
              //   [
              //   {
              //     color:
              //       colorScheme === "light" ? Colors.darkText : Colors.lightText,
              //   },
              // ]
            }>
            We Provide best quality items in a very {"\n"} reasonable {"\n"}{" "}
            Price.
          </Text>
          {/* </View> */}
          <View style={{ flexDirection: "row", marginLeft: "10%" }}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => navigation.navigate("HomeScreen")}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("HomeScreen")}>
              <Text style={styles.buttonText}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // paddingLeft: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "#000",
    // justifyContent: "center",
    marginBottom: 30,
    marginLeft: "15%",
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 20,
    marginHorizontal: 23,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.button,
    width: 60,
    height: 60,
    borderRadius: 30,
    // paddingBottom: 5,
  },
  button1: {
    backgroundColor: Colors.button,
    width: "70%",
    height: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "300",
    alignSelf: "center",
    // marginBottom: 10,
    paddingBottom: 10,
  },
});
