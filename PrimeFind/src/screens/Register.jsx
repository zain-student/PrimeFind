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
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bgRemoved Logo.png")}
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
        <Text
          style={{
            fontSize: 16,
            marginBottom: 2,
          }}>
          Re-Enter Password
        </Text>
        <TextInput placeholder="*******" style={styles.inputText} />

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={{ fontSize: 20, color: "white" }}>Signup</Text>
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
          <Text>Already Have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}>
            <Text style={{ color: "blue" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  signUpButton: {
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
    marginTop: 30,
    height: 40,
    // backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
