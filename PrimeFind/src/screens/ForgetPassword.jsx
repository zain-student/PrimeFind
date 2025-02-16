import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  ToastAndroid,
  //   SafeAreaProvider,
} from "react-native";
import React, { useState } from "react";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ip } from "../../constants";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const forgetPasswordRequest = async () => {
    console.log(email);
    try {
      const res = await axios.post(`http://${Ip}/user/requestReset`, {
        email,
      });

      // console.log(res);
      if (res.status == 200) {
        navigation.navigate("FPOtp", { email: email });
        ToastAndroid.show("Check your Email", ToastAndroid.SHORT);
        console.log(res);
      }

      console.log(res.data); // Handle response data
    } catch (error) {
      ToastAndroid.show(
        error.response?.data || error.message,
        ToastAndroid.SHORT
      );
    }
    // };
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="rgba(5,4,5,0.4)"
          translucent={true}
        />
        <ImageBackground
          source={require("../assets/images/backgroundImage.png")}
          resizeMode="cover"
          style={styles.bgImage}>
          <Image
            source={require("../assets/images/bgRemoved Logo.png")}
            style={styles.image}
          />
          <Text style={styles.heading}>Forget Password?</Text>
          <Text
            style={{
              textAlign: "center",
              color: "grey",
              marginBottom: 30,
            }}>
            Please Enter Your Email Address
          </Text>
          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 2,
              }}>
              Email Address
            </Text>
            <TextInput
              placeholder="abc123@gmail.com"
              style={styles.inputText}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={forgetPasswordRequest}>
              <Text style={{ fontSize: 20, color: "white" }}>
                Send Verification Code
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // paddingLeft: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: -45,
    marginLeft: "20%",
  },
  heading: {
    fontSize: 25,
    color: "#000",
    fontWeight: "500",
    marginLeft: "20%",
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: "30%",
  },
  inputText: {
    width: 300,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#000",
  },
  loginButton: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.button,
    borderRadius: 10,
    marginTop: 70,
  },
});
