import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../components/colors/Colors";
import { Ip } from "../../constants";

const ChangePassword = ({ navigation, route }) => {
  const { email } = route.params || {};
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      ToastAndroid.show("All fields are required!", ToastAndroid.SHORT);
      return;
    }
    if (newPassword !== confirmPassword) {
      ToastAndroid.show("Passwords do not match!", ToastAndroid.SHORT);
      return;
    }
    if (newPassword.length < 6) {
      ToastAndroid.show(
        "Password must be at least 6 characters long",
        ToastAndroid.SHORT
      );
      return;
    }

    try {
      const res = await axios.post(`http://${Ip}/user/changePassword`, {
        email,
        password: newPassword,
        confirmPassword,
      });

      if (res.status === 200) {
        ToastAndroid.show("Password Reset Successfully!", ToastAndroid.SHORT);
        navigation.navigate("Login");
      }
    } catch (error) {
      ToastAndroid.show(
        error.response?.data || error.message,
        ToastAndroid.SHORT
      );
    }
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
          <Text style={styles.heading}>Reset Password</Text>
          <Text style={styles.subText}>
            Enter a new password for your account
          </Text>
          <TextInput
            placeholder="New Password"
            secureTextEntry
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetPassword}>
            <Text style={{ fontSize: 20, color: "white" }}>Reset</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  heading: {
    fontSize: 25,
    color: "#000",
    fontWeight: "500",
    textAlign: "center",
  },
  subText: {
    textAlign: "center",
    color: "grey",
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "white",
  },
  resetButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.button,
    borderRadius: 10,
  },
});
