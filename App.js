import { StatusBar } from "expo-status-bar";
import { StackNavigation } from "./navigation/StackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomStatusbar } from "./components/layout/Statusbar";
import CustomBottomNavigation from "./components/layout/BottomNavigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <CustomStatusbar />
      <StackNavigation />
    </SafeAreaView>
  );
}
