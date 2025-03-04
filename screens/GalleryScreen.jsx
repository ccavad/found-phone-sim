import { createBox, createText } from "@shopify/restyle";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Modal,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Gallery from "react-native-awesome-gallery";
import theme from "../theme/theme";
import { ChevronLeft } from "lucide-react-native";

const Box = createBox();
const Text = createText();
const { width } = Dimensions.get("window");

const imageMap = {
  "palm-tree": require("../assets/images/palm-tree.jpg"),
  "train-wallpaper": require("../assets/images/train-wallpaper.jpg"),
  "private-eye-1": require("../assets/images/wallpaper_private_eye_1.png"),
  "private-eye-2": require("../assets/images/wallpaper_private_eye_2.png"),
};
const images = Object.keys(imageMap);

export const GalleryScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryImages = images.map((img) => {
    const source = Image.resolveAssetSource(imageMap[img]);
    return {
      uri: source.uri,
      width: source.width,
      height: source.height,
    };
  });

  const handleBack = () => {
    setSelectedIndex(null);
  };

  return (
    <Box backgroundColor="black" flex={1} padding="m">
      <Text variant="header" marginBottom="s">
        Gallery
      </Text>

      {/* Grid Gallery */}
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={(item) => item}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => setSelectedIndex(index)}>
            <Image
              source={imageMap[item]}
              style={[
                styles.gridImage,
                {
                  width: width / 2 - theme.spacing.l,
                },
              ]}
            />
          </Pressable>
        )}
      />

      {/* Fullscreen Image Viewer */}
      <Modal
        visible={selectedIndex !== null}
        transparent={false}
        onRequestClose={() => setSelectedIndex(null)}
      >
        <Box backgroundColor="black" flex={1}>
          {/* Back Button */}
          <Box
            width={100}
            position="absolute"
            top={30}
            left={0}
            zIndex={1}
            // borderWidth={1}
            // borderColor="primary"
            // borderRadius="m"
            padding="s"
          >
            <TouchableOpacity onPress={handleBack} style={styles.button}>
              <ChevronLeft color="white" size={18} />
              <Text variant="body" fontSize={18} color="text">
                {selectedIndex + 1} / {images.length}
              </Text>
            </TouchableOpacity>
          </Box>
          <Gallery
            data={galleryImages}
            initialIndex={selectedIndex ?? 0}
            onIndexChange={(index) => setSelectedIndex(index)}
            keyExtractor={(item) => item.uri}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.uri }}
                style={styles.fullscreenImage}
                resizeMode="contain"
              />
            )}
          />
        </Box>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  gridImage: {
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  fullscreenImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "transparent", // Transparent buttons
    flexDirection: "row",
    alignItems: "center",
    width: 80,
  },
});
