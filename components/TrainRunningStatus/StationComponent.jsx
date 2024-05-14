import { View, Text } from 'react-native'
import React from 'react'

const StationComponent = ({ stationData }) => {
    return (
        <View className="flex flex-row gap-5">
            <View className="rounded-full w-4 h-4 bg-OffWhite" />
            <Text className="text-OffWhite my-2 font-semibold">{stationData.station_name}</Text>
        </View>
    )
}

export default StationComponent