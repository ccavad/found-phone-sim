import { StatusBar } from "expo-status-bar";
import { StackNavigation } from "./navigation/StackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomStatusbar } from "./components/layout/Statusbar";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <CustomStatusbar />
        <StackNavigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}
