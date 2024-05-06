import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import Input from "../components/TrainRunningStatus/Input.jsx";
import LiveStatus from "../components/TrainRunningStatus/LiveStatus.jsx";

const TrainRunningScreen = ({ navigation }) => {
    const [clicked, setClicked] = useState(true);
    const handleClick = () => {
        setClicked(true);
    };

    return (
        <View className="w-screen h-screen bg-Background">
            <View className="mx-8">
                <Text className="text-lg font-semibold text-textWhite my-5">
                    Enter Train Number
                </Text>
                <Input value={"TRAIN"} />
            </View>
            <LiveStatus />
        </View>
    );
};

export default TrainRunningScreen;
