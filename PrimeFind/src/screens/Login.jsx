import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../components/colors/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bgRemoved Logo.png")}
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
          Email
        </Text>
        <TextInput placeholder="abc123@gmail.com" style={styles.inputText} />
        <Text
          style={{
            fontSize: 16,
            marginBottom: 2,
          }}>
          Password
        </Text>
        <TextInput placeholder="*******" style={styles.inputText} />
        <TouchableOpacity
          style={{ alignItems: "flex-end", marginTop: 10 }}
          onPress={() => {
            navigation.navigate("ForgetPassword");
          }}>
          <Text>Forget password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
          <View>
            <Text style={{ width: 110, textAlign: "center", color: "grey" }}>
              Or Sign Up With
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
        </View>
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={30} color="red" />
          <Text style={{ fontSize: 20, marginLeft: 5, marginTop: -3 }}>
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="facebook" size={30} color="blue" />
          <Text style={{ fontSize: 20, marginLeft: 5, marginTop: -3 }}>
            Facebook
          </Text>
        </TouchableOpacity>
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
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: -45,
  },
  heading: {
    fontSize: 25,
    color: "#000",
    fontWeight: "500",
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
