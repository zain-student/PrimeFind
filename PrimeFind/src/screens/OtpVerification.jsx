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
const OtpVerification = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const { email } = route.params || {};
  console.log(email);

  const otpCall = async () => {
    try {
      const res = await axios.post(`http://${Ip}/user/auth/verify`, {
        email,
        verificationCode: otp,
      });

      // console.log(res);
      if (res.status == 200) {
        ToastAndroid.show("OTP Verified Successfully", ToastAndroid.SHORT);
        // navigation.navigate("Login");
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

  const verifyOTP = () => {
    if (otp.length !== 6) {
      ToastAndroid.show("Please enter a valid 6-digit OTP", ToastAndroid.SHORT);
    } else {
      otpCall();
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
          <Text style={styles.heading}>OTP Verification</Text>
          <Text style={styles.subText}>
            Enter the 6-digit code sent to your email
          </Text>
          <TextInput
            placeholder="Enter OTP"
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity style={styles.verifyButton} onPress={verifyOTP}>
            <Text style={{ fontSize: 20, color: "white" }}>Verify</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};

export default OtpVerification;

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
  otpInput: {
    width: 200,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  verifyButton: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.button,
    borderRadius: 10,
  },
});
