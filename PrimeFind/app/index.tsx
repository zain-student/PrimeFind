import { Text, View } from "react-native";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Welcome from "../src/screens/Welcome";
import Register from "../src/screens/Register";
import Login from "../src/screens/Login";
import ForgetPassword from "../src/screens/ForgetPassword";
const stack = createNativeStackNavigator();
export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Welcome">
          <stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{
              headerShown: false,
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
