import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";
import Profile from "./screens/profile";
import ModalRe from "./screens/modalRE";
import { RealEstate } from "./interfaces/home/realEstate";
import RecuperateAccount from "./screens/sendCodeToEmail";
import ChangePassword from "./screens/changePassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
//graphql
import { ApolloClient, HttpLink, split } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client/react";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import config from "./config/http";

const sLink = new HttpLink({
  uri: `${config.backendExpressUrl}graphql`,
});
//"ws://localhost:3002/graphql",
const wsLink = new GraphQLWsLink(
  createClient({
    url: `${config.backendExpressUrlWs}`,
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  sLink
);

const client = new ApolloClient({
  connectToDevTools: true, //devtools browser
  cache: new InMemoryCache(),
  link: splitLink,
});

export type MyStackParamList = {
  Home: undefined;
  Profile: undefined;
  Login: { visible: boolean };
  Register: undefined;
  ModalRe: { realEstate: RealEstate };
  RecuperateAccount: undefined;
  ChangePassword: undefined;
};

const Stack = createStackNavigator<MyStackParamList>();

const Tab = createBottomTabNavigator<MyStackParamList>();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ size, focused, color }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, focused, color }) => {
            return <Ionicons name="ios-person" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ModalRe" component={ModalRe} />
          <Stack.Screen
            name="RecuperateAccount"
            component={RecuperateAccount}
          />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />

          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Profile" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
