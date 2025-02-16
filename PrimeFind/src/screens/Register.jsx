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
import axios from "axios";
import React, { useState } from "react";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ip } from "../../constants";
const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [secureText2, setSecureText2] = useState(true);
  // Signup Validation
  const SignupValidate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (name === "") {
      ToastAndroid.show("Please enter your name", ToastAndroid.SHORT);
    } else if (email === "") {
      ToastAndroid.show("Please enter your email", ToastAndroid.SHORT);
    } else if (!emailRegex.test(email)) {
      ToastAndroid.show(
        "Please enter a valid email address.",
        ToastAndroid.SHORT
      );
    } else if (password === "") {
      ToastAndroid.show("Please enter your password", ToastAndroid.SHORT);
    } else if (confirmPassword === "") {
      ToastAndroid.show("Please confirm your password", ToastAndroid.SHORT);
    } else if (strongPasswordRegex.test(password)) {
      if (password !== confirmPassword) {
        ToastAndroid.show("Passwords do not match", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Password is too weak", ToastAndroid.SHORT);
        return false;
      }
    } else {
      SignupCall();
    }
  };
  const SignupCall = async () => {
    // console.log(name, email, password, confirmPassword);
    // const signupUser = async () => {
    try {
      console.log(Ip);
      const res = await axios.post(`http://${Ip}/user/auth/signup`, {
        name,
        email,
        password,
        confirmPassword,
      });

      // console.log(res);
      if (res.status == 200) {
        console.log(res);
        navigation.navigate("OtpVerification", { email: email });
      }

      console.log(res.data); // Handle response data
    } catch (error) {
      ToastAndroid.show(
        error.response?.data || error.message,
        ToastAndroid.SHORT
      );
    }
    // };

    // navigation.navigate("HomeScreen");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <SafeAreaProvider>
      <ScrollView
        scrollEnabled
        contentContainerStyle={styles.container}
        // style={styles.container}
      >
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
          <Text style={styles.heading}>Create Account</Text>
          <Text
            style={{
              textAlign: "center",
              color: "grey",
            }}>
            Fill Your Information Below OR Register{"\n"} Your Account
          </Text>
          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 2,
              }}>
              User Name
            </Text>
            <TextInput
              placeholder="abc"
              style={styles.inputText}
              keyboardType="default"
              value={name}
              onChangeText={setName}
            />
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

            <Text
              style={{
                fontSize: 16,
                marginBottom: 2,
              }}>
              Re-Enter Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="*******"
                style={styles.inputPassword}
                secureTextEntry={secureText2}
                keyboardType="default"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setSecureText2(!secureText2)}>
                <Text style={styles.toggleText}>
                  {secureText2 ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={SignupValidate}>
              <Text style={{ fontSize: 20, color: "white" }}>Signup</Text>
            </TouchableOpacity>

            <View style={styles.signInButton}>
              <Text>Already Have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}>
                <Text style={{ color: "blue" }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: "25%",
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
    // marginVertical: 10,
  },
  inputPassword: {
    flex: 1,
    // padding: 10,
  },
  inputText: {
    width: 300,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#000",
  },
  inputContainer: {
    width: 300,
    height: 400,
    marginLeft: 30,
    // borderWidth: 2,
    // borderColor: "black",
  },
  signUpButton: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.button,
    borderRadius: 10,
    marginTop: 20,
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
    marginTop: 30,
    height: 40,
    // backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
