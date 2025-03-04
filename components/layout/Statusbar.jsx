import React from "react";
import { BatteryMedium } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { useClock } from "../../utils/hooks/useClock";

export const CustomStatusbar = () => {
  const time = useClock();
  return (
    <View style={styles.statusBar}>
      <Text style={styles.statusBarText}>{time}</Text>
      <View style={styles.batteryFlex}>
        <Text style={styles.statusBarText}>67%</Text>
        <BatteryMedium color="white" size={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "black",
    paddingInline: 15,
  },
  statusBarText: {
    color: "white",
  },
  batteryFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
