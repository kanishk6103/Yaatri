import { Text, View } from "react-native";
import React, { Component } from "react";

export class SeatAvailability extends Component {
    render() {
        return (
            <View className="flex justify-center items-center w-screen h-screen bg-black">
                <Text className="text-4xl text-white">
                    (Never) Coming{" "}
                    <Text style={{ textDecorationStyle: "strikethrough" }}>
                        Soon
                    </Text>
                    ....
                </Text>
            </View>
        );
    }
}

export default SeatAvailability;
