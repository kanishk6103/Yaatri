import { View, Text } from "react-native";
import React from "react";

const StationComponent = ({ stationData, currentData }) => {
    return (
        <View className="flex flex-row gap-5">
            <View className="rounded-full w-4 h-4 bg-OffWhite" />
            <View className="flex flex-row w-9/12 justify-between">
                <Text className="text-OffWhite font-semibold">
                    {stationData.station_name}
                </Text>
                <Text className="text-OffWhite">
                    PF#{stationData.platform_number}
                </Text>
            </View>
        </View>
    );
};

export default StationComponent;
