import { View, Text } from 'react-native'
import React from 'react'

const Box = ({ confirmed }) => {
    return (
        <View className={"flex justify-center items-center rounded-md " + (confirmed ? "bg-Success" : "bg-Rejection")} >
            <Text className="text-center text-[8px] font-normal text-OffWhite p-1">{confirmed ? "Confirmed" : "Waiting"}</Text>
        </View>
    )
}

export default Box