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
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";
import { Ip } from "../../constants";
import { getToken, saveToken } from "../components/colors/AuthFunctions";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  //Login Validation
  const loginValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      ToastAndroid.show("Please enter your email", ToastAndroid.SHORT);
    } else if (!emailRegex.test(email)) {
      ToastAndroid.show(
        "Please enter a valid email address.",
        ToastAndroid.SHORT
      );
      return;
    } else if (password === "") {
      ToastAndroid.show("Please enter your password", ToastAndroid.SHORT);
    } else {
      LoginCall();
    }
  };
  const LoginCall = async () => {
    try {
      const res = await axios.post(`http://${Ip}/user/auth/login`, {
        email,
        password,
      });

      // console.log(res);
      if (res.status == 200) {
        console.log("Login");
        const to = await saveToken(res.data);
        console.log(res.data); // Handle response data

        navigation.navigate("HomeScreen");
      }

      const sv = await getToken();
      // console.log("sved tken is:", sv);
    } catch (error) {
      ToastAndroid.show(
        error.response?.data || error.message,
        ToastAndroid.SHORT
      );
    }
    // };

    // navigation.navigate("HomeScreen");

    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
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
          <Text style={styles.heading}>Login Here!</Text>
          <Text
            style={{
              textAlign: "center",
              color: "grey",
            }}>
            Welcome Back! Enter Your Credentials To {"\n"} Explore Further
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
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Text
              style={{
                fontSize: 16,
                marginBottom: 2,
              }}>
              Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="*******"
                // style={styles.inputText}
                style={styles.inputPassword}
                secureTextEntry={secureText}
                keyboardType="default"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Text style={styles.toggleText}>
                  {secureText ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 10 }}
              onPress={() => {
                navigation.navigate("ForgetPassword");
              }}>
              <Text>Forget password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={loginValidation}>
              <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}>
              <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
              <View>
                <Text style={{ width: 50, textAlign: "center", color: "grey" }}>
                  Or
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
            </View>
            {/* <TouchableOpacity
              style={styles.googleButton}
              onPress={handleEmailSignup}>
              <Icon name="email" size={30} color="green" />
              <Text style={{ fontSize: 17, marginLeft: 5, marginTop: -3 }}>
                Continue with Email
              </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              style={styles.googleButton}
              onPress={handleGoogleSignup}>
              <Icon name="google" size={30} color="red" />
              <Text style={{ fontSize: 17, marginLeft: 5, marginTop: -3 }}>
                Continue with Google
              </Text>
            </TouchableOpacity> */}

            <View style={styles.signInButton}>
              <Text>Don't Have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}>
                <Text style={{ color: "blue" }}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f0f0f0",
    // justifyContent: "center",
    // alignItems: "center",
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
    marginLeft: "30%",
  },
  inputText: {
    width: 300,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#000",
  },
  toggleText: {
    padding: 10,
    color: "#007bff",
    fontWeight: "bold",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 0.5,
    // borderColor: "#ccc",
    borderRadius: 5,
    // backgroundColor: "#fff",
    marginVertical: 10,
  },
  inputPassword: {
    flex: 1,
    padding: 10,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // paddingLeft: 10,
  },
  inputContainer: {
    width: 300,
    height: 400,
    marginLeft: 30,
    // borderWidth: 2,
    // borderColor: "black",
  },
  loginButton: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.button,
    borderRadius: 10,
    marginTop: 5,
  },
  googleButton: {
    width: 300,
    height: 40,
    marginTop: 10,
    borderColor: "grey",
    borderWidth: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signInButton: {
    marginTop: 50,
    height: 40,
    // backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
