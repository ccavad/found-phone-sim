import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import CustomBottomNavigation from "../components/layout/BottomNavigation";
import SwipeToUnlock from "../screens/SwipeToUnlock";
import { useGameStore } from "../store/gameStore";
import { SideMenu } from "../components/layout/SideMenu";
import { GalleryScreen } from "../screens/GalleryScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const isLocked = useGameStore((state) => state.isLocked);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TestScreen" component={SwipeToUnlock} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen
          name="GalleryScreen"
          component={GalleryScreen}
          options={{
            // animation: "none",
            animation: "scale_from_center",
          }}
        />
      </Stack.Navigator>
      {!isLocked && <CustomBottomNavigation />}
      <SideMenu />
    </NavigationContainer>
  );
};
