import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainScreen } from "../screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TestScreen } from "../screens/TestScreen";
import CustomBottomNavigation from "../components/layout/BottomNavigation";

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
      <CustomBottomNavigation />
    </NavigationContainer>
  );
};
