// import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// import React from "react";
// import {
//   NavigationContainer,
//   NavigationIndependentTree,
// } from "@react-navigation/native";
// import Colors from "../components/colors/Colors";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Welcome from "../screens/Welcome";
// import Register from "../screens/Register";
// import Login from "../screens/Login";
// import ForgetPassword from "../screens/ForgetPassword";
// import HomeScreen from "../screens/HomeScreen";
// import ProductScreen from "../screens/ProductScreen";
// import AuthStackScreen from "./AuthStackScreen";
// import Profile from "../screens/Profile";
// import Cart from "../screens/Cart";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// const stack = createNativeStackNavigator();
// const tab = createBottomTabNavigator();

// const AccountScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontSize: 20, marginBottom: 20 }}>Account Section</Text>
//       <Button
//         title="Go to Login/Register"
//         onPress={() => navigation.navigate("AuthStackScreen")}
//       />
//     </View>
//   );
// };
// const tabNavigator = () => {
//   return (
//     <NavigationIndependentTree>
//       <NavigationContainer>
//         <tab.Navigator initialRouteName="HomeScreen">
//           <tab.Screen
//             name="HomeScreen"
//             component={HomeScreen}
//             options={({ navigation }) => ({
//               title: "Home",
//               headerTitleAlign: "center",
//               tabBarIcon: ({ color }) => (
//                 <Icon size={28} name="home" color={color} />
//               ),
//               drawerIcon: () => (
//                 <Icon name="home" size={24} color={Colors.primary} />
//               ),
//               headerRight: () => (
//                 <TouchableOpacity
//                   style={{ marginRight: 10 }}
//                   onPress={() => navigation.navigate("Cart")}>
//                   <Icon name="cart-outline" size={30} color="black" />
//                 </TouchableOpacity>
//               ),
//             })}
//           />
//           <tab.Screen
//             name="ProductScreen"
//             component={ProductScreen}
//             options={{
//               headerShown: false,
//               tabBarIcon: ({ color }) => (
//                 <Icon size={28} name="text-search" color={color} />
//               ),
//             }}
//           />
//           <tab.Screen
//             name="You"
//             component={AccountScreen}
//             options={{
//               headerTitleAlign: "center",
//               tabBarIcon: ({ color }) => (
//                 <Icon size={28} name="account" color={color} />
//               ),
//             }}
//           />

//           <tab.Screen
//             name="Cart"
//             component={Cart}
//             options={{
//               headerTitleAlign: "center",
//               tabBarIcon: ({ color }) => (
//                 <Icon size={28} name="cart-outline" color={color} />
//               ),
//             }}
//           />

//           {/* // options={{
//           //   drawerIcon: ({ color, size }) => (
//           //       <Icon name="cart-outline" size={size} color={color} />
//           //   }} */}
//         </tab.Navigator>
//       </NavigationContainer>
//     </NavigationIndependentTree>
//   );
// };

// const AppNavigation = () => {
//   return (
//     <NavigationIndependentTree>
//       <NavigationContainer>
//         <stack.Navigator initialRouteName="Welcome">
//           <stack.Screen
//             name="Welcome"
//             component={Welcome}
//             options={{
//               headerShown: false,
//             }}
//           />
//           {/* <stack.Screen
//             name="AuthStack"
//             component={AuthStackScreen}
//             options={{ headerShown: false }}
//           /> */}
//           <stack.Screen
//             name="AuthStackScreen"
//             component={AuthStackScreen} // ⬅️ Added Auth Stack
//             options={{ headerShown: false }}
//           />

//           <stack.Screen
//             name="Login"
//             component={Login}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <stack.Screen
//             name="Register"
//             component={Register}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <stack.Screen
//             name="ForgetPassword"
//             component={ForgetPassword}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <stack.Screen
//             name="HomeScreen"
//             component={tabNavigator}
//             options={({ navigation }) => ({
//               headerShown: false,
//               title: "PRIMEFIND",
//               headerStyle: {
//                 backgroundColor: "#fff",
//               },
//               headerLeft: () => (
//                 <TouchableOpacity
//                   style={{ flexDirection: "row", borderWidth: 1 }}
//                   onPress={() => navigation.navigate("ProfileScreen")}>
//                   {/* <Icon name="account-circle-outline" size={39} color="#000" /> */}
//                   <Icon name="menu" size={39} color="#000" />
//                 </TouchableOpacity>
//               ),

//               headerRight: () => (
//                 // <Icon name="cog-outline" size={39} color="#000" />
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate("Cart");
//                   }}>
//                   <Icon name="cart" size={39} color="#000" />
//                 </TouchableOpacity>
//               ),
//               headerTintColor: "#000",
//               headerTitleAlign: "center",
//               headerTitleStyle: {
//                 fontWeight: "500",
//               },
//             })}
//           />
//           {/* <stack.Screen
//             name="ProductScreen"
//             component={ProductScreen}
//             options={{
//               title: "Product",
//               headerStyle: {
//                 backgroundColor: "white",
//               },
//               headerTintColor: "grey",
//               headerTitleAlign: "center",
//               headerTitleStyle: {
//                 fontWeight: "500",
//               },
//             }}
//           /> */}
//           {/* <stack.Screen
//             name="ProfileScreen"
//             component={Profile}
//             options={({ navigation }) => ({
//               title: "Profile",
//               headerStyle: {
//                 backgroundColor: "white",
//               },
//               headerTintColor: "grey",
//               headerTitleAlign: "center",
//               headerTitleStyle: {
//                 fontWeight: "500",
//               },
//               headerLeft: () => <Text></Text>,
//             })}
//           /> */}
//           {/* <stack.Screen name="Cart" component={Cart} /> */}
//         </stack.Navigator>
//       </NavigationContainer>
//     </NavigationIndependentTree>
//   );
// };

// export default AppNavigation;

// const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
// Import Screens
import Welcome from "../screens/Welcome";
import Register from "../screens/Register";
import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import ForgetPassword from "../screens/ForgetPassword";
import OtpVerification from "../screens/OtpVerification";
import FPOtp from "../screens/FPOtp";
import ChangePassword from "../screens/ChangePassword";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Section</Text>
      <Button
        title="Go to Login/Register"
        onPress={() => navigation.navigate("AuthStack")}
      />
    </View>
  );
};

const AuthStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FPOtp"
        component={FPOtp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const [cart, setCart] = useState([]);
  return (
    <Tab.Navigator
    //  initialRouteName="HomeScreen"
    >
      <Tab.Screen
        name="HomeScreen"
        options={({ navigation }) => ({
          title: "Home",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon size={28} name="home" color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate("Cart")}>
              <Icon name="cart-outline" size={30} color="black" />
            </TouchableOpacity>
          ),
        })}>
        {(props) => <HomeScreen {...props} cart={cart} setCart={setCart} />}
      </Tab.Screen>

      {/* <Tab.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerShown: false,
          // tabBarIcon: ({ color }) => (
          //   <Icon size={28} name="text-search" color={color} />
          // ),
        }}
      /> */}
      <Tab.Screen
        name="You"
        component={AccountScreen} // Updated to AccountScreen
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Icon size={28} name="account" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Icon size={28} name="cart-outline" color={color} />
          ),
        }}>
        {(props) => <Cart {...props} cart={cart} setCart={setCart} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AuthStack"
            component={AuthStackScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 20 },
});
