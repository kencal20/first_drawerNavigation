import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Login from "../pages/login";
import Signin from "../pages/signin";
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "dodgerblue",
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signin" component={Signin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
