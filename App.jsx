import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import AppNavigator from './navigation/appNavigation';
import { View, SafeAreaView } from "react-native";
import "./global.css"
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <AppNavigator />
    </SafeAreaView>
  );
}
