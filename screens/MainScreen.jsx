import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* background image  */}
      <ImageBackground
        source={require("../assets/images/train-wallpaper.jpg")}
        resizeMode="cover"
        // blurRadius={5}
        style={styles.bgImage}
      >
        <Pressable onPress={() => navigation.navigate("TestScreen")}>
          <Text>press</Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
