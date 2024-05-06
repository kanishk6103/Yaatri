import { View, Text } from 'react-native'
import React from 'react'

const Box = ({ confirmed }) => {
    return (
        <View className={"flex p-[5px] justify-center items-center rounded-md bg-" + (confirmed ? "Success" : "Rejection")} >
            <Text className="text-center text-[8px] font-normal text-textWhite">{confirmed ? "Confirmed" : "Waiting"}</Text>
        </View>
    )
}

export default Box