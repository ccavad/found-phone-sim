import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  SafeAreaView,
  Button,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const correctPin = "1234"; // Define the correct PIN

const SwipeToUnlock = () => {
  const [unlock, setUnlock] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [pinValid, setPinValid] = useState(null); // null, true, or false
  const translateX = new Animated.Value(0); // to track swipe movement

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: false }
  );

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translationX > 150) {
      // Adjust threshold as needed
      setUnlock(true); // Unlock and transition to PIN screen
    } else {
      // Reset position if swipe wasn't enough
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePinChange = (pin) => {
    setEnteredPin(pin);
  };

  const handlePinSubmit = () => {
    if (enteredPin === correctPin) {
      setPinValid(true); // Successfully unlocked
    } else {
      setPinValid(false); // Incorrect PIN
    }
  };

  if (unlock && pinValid === null) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.pinScreen}>
          <Text style={styles.instructions}>Enter PIN</Text>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={4}
            value={enteredPin}
            onChangeText={handlePinChange}
            secureTextEntry
            placeholder="Enter PIN"
          />
          <Button title="Submit" onPress={handlePinSubmit} />
          {pinValid === false && (
            <Text style={styles.errorText}>Incorrect PIN</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }

  if (pinValid === true) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Phone Unlocked! Game Started!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.unlockScreen}>
        <Text style={styles.instructions}>Swipe to unlock</Text>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onEnded={onGestureEnd}
        >
          <Animated.View
            style={[
              styles.swipeBar,
              {
                transform: [{ translateX }],
              },
            ]}
          >
            <Text style={styles.swipeText}>Swipe Me!</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },
  unlockScreen: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "80%",
    height: "50%",
  },
  pinScreen: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "80%",
    height: "50%",
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
    color: "#333",
  },
  swipeBar: {
    width: 200,
    height: 60,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  swipeText: {
    color: "white",
    fontSize: 18,
  },
  pinInput: {
    width: "80%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default SwipeToUnlock;
