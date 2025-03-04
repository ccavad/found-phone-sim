import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
import { ChevronLeft, Home, Settings } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme/theme";

const CustomBottomNavigation = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    // console.log("navigation", navigation);
    console.log("naviga", navigation?.getCurrentRoute()?.name);
    // todo it shouldnt go back lock screen
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const handleHome = () => {
    navigation.navigate("MainScreen");
  };

  const handleSettings = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={handleBack} style={styles.button}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>

        {/* Main Button */}
        <TouchableOpacity onPress={handleHome} style={styles.button}>
          <Home color="white" size={24} />
        </TouchableOpacity>

        {/* Settings Button */}
        <TouchableOpacity onPress={handleSettings} style={styles.button}>
          <Settings color="white" size={24} />
        </TouchableOpacity>
      </View>
      {/* Modal for Settings Button */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} // Close modal
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Settings Modal</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: theme.colors.darkOverlay, // Transparent background
    // borderTopWidth: 1,
    // borderTopColor: "#fff",
    zIndex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: "transparent", // Transparent buttons
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.darkOverlay,
  },
  modalContent: {
    backgroundColor: "#4A90E2", // Slightly lighter than pure black
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A3A3C", // Subtle border for depth
    padding: 20,
    width: 300,
    height: 200,
  },
  gptModalContent: {
    backgroundColor: "#9CA3AF", // Clean white background
    borderRadius: 16,
    shadowColor: "#9CA3AF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 8,
    padding: 20,
    width: 300,
    height: 200,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CustomBottomNavigation;
