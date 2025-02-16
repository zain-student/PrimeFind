import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../components/colors/Colors";
const Profile = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
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
      <View style={styles.innerContainer}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Icon name="account-circle-outline" size={50} color="white" />
          <Text
            style={[
              styles.loginText,
              {
                color:
                  colorScheme === "light" ? Colors.darkText : Colors.lightText,
              },
            ]}>
            Upload Photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: Colors.secondary,
            width: 150,
            height: 55,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("Login")}>
          <Text
            style={[
              styles.loginText,
              {
                color:
                  colorScheme === "light" ? Colors.darkText : Colors.lightText,
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  innerContainer: {
    // flex: 1,
    backgroundColor: "grey",
    height: 150,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: 10,
  },
  loginText: {
    fontSize: 30,
    color: "grey",
    fontWeight: "500",
    marginTop: 6,
  },
});
