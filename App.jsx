import AppNavigator from "./navigation/appNavigation";
import {  SafeAreaView } from "react-native";
import "./global.css";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-[#000000]">
            <AppNavigator />
        </SafeAreaView>
    );
}
