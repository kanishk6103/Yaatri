import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PNRCheckScreen from "../screens/PNRCheckScreen";
import TrainRunningScreen from "../screens/TrainRunningScreen.jsx";
import FindTrainsScreen from "../screens/FindTrainsScreen.jsx";
import { useFonts, Poppins_200ExtraLight } from "@expo-google-fonts/poppins";
import SeatAvailability from "../screens/SeatAvailability.js";
import Contributors from "../screens/Contributors.jsx";
const Stack = createNativeStackNavigator();
const MyStack = () => {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight, // Load Poppins font with required weight
    });

    if (!fontsLoaded) {
        return null; // Render nothing until the font is loaded
    }
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000000",
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                    fontFamily: "Poppins_200ExtraLight",
                    fontSize: 32,
                },
            }}
        >
            <Stack.Screen name="Yaatri" component={HomeScreen} />
            <Stack.Screen name="Check PNR" component={PNRCheckScreen} />
            <Stack.Screen name="Train Status" component={TrainRunningScreen} />
            <Stack.Screen name="Find Trains" component={FindTrainsScreen} />
            <Stack.Screen
                name="Seat Availability"
                component={SeatAvailability}
            />
            <Stack.Screen name="Contributors" component={Contributors} />
        </Stack.Navigator>
    );
};
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};

export default AppNavigator;
