import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
import { ArrowLeft, ChevronLeft, Home, Settings } from "lucide-react-native"; // Import the Lucide icons
import { useNavigation } from "@react-navigation/native";

const CustomBottomNavigation = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
    borderTopWidth: 1,
    borderTopColor: "#fff",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CustomBottomNavigation;
