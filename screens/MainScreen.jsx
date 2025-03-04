import React from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { createBox, createText } from "@shopify/restyle";
import theme from "../theme/theme";
import {
  Images,
  MessageCircle,
  Mail,
  Globe,
  Share2,
} from "lucide-react-native";

const menuItems = [
  {
    title: "Gallery",
    screen: "GalleryScreen",
    icon: <Images color={"white"} size={25} />,
    bgColor: "#FF6347", // Tomato red
  },
  {
    title: "Messages",
    screen: "MessagesScreen",
    icon: <MessageCircle color={"white"} size={25} />,
    bgColor: "#4A90E2", // Bright blue
  },
  {
    title: "Email",
    screen: "EmailScreen",
    icon: <Mail color={"white"} size={25} />,
    bgColor: "#34D399", // Emerald green
  },
  {
    title: "Browser",
    screen: "BrowserScreen",
    icon: <Globe color={"white"} size={25} />,
    bgColor: "#6366F1", // Indigo
  },
  {
    title: "Social Media",
    screen: "SocialMediaScreen",
    icon: <Share2 color={"white"} size={25} />,
    bgColor: "#8B5CF6", // Purple
  },
];

const Box = createBox();
const Text = createText();

export const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/wallpaper_private_eye_2.png")}
        resizeMode="cover"
        blurRadius={2}
        style={styles.bgImage}
      >
        <FlatList
          data={menuItems}
          numColumns={3}
          contentContainerStyle={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          // style={{ borderWidth: 1, borderColor: "red" }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate(item.screen)}
              style={({ pressed }) => [
                styles.menuItem,
                {
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Box
                style={{
                  backgroundColor: item.bgColor,
                }}
                padding="m"
                borderRadius="m"
              >
                {item.icon}
              </Box>
              <Text
                color="text"
                variant="caption"
                style={{
                  marginTop: 5,
                  fontSize: 10,
                }}
              >
                {item.title}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
  menuItem: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: theme.colors.background,
    padding: theme.padding.s,
    borderRadius: theme.borderRadii.s,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 50,
  },
});
