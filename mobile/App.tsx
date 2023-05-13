import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";
import Profile from "./screens/profile";
import ModalRe from "./screens/modalRE";
import { RealEstate } from "./interfaces/home/realEstate";

export type MyStackParamList = {
  Home: undefined;
  Profile: undefined;
  Login: undefined;
  Register: undefined;
  RecuperateAccount: undefined;
  ModalRe: { realEstate: RealEstate };
};

const Stack = createStackNavigator<MyStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecuperateAccount" component={Home} />
        <Stack.Screen name="ModalRe" component={ModalRe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
