import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Login from "../pages/login";
import Signin from "../pages/signin";
import About from "../pages/About";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "dodgerblue",
          },
          headerTitleAlign: "left",
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signin" component={Signin} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

