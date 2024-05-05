import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PNRCheckScreen from "../screens/PNRCheckScreen";
import TrainRunningScreen from "../screens/TrainRunningScreen.jsx";
import FindTrainsScreen from "../screens/FindTrainsScreen.jsx";
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MyStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000000",
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                    fontWeight: "200",
                    fontSize: 32,
                },
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PNR" component={PNRCheckScreen} />
            <Stack.Screen name="TrainStatus" component={TrainRunningScreen} />
            <Stack.Screen name="FindTrains" component={FindTrainsScreen} />
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
