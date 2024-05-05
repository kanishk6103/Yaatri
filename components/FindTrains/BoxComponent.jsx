import React from 'react'
import { Text } from "react-native"
const BoxComponent = ({ text, active }) => {
    return (

        <Text className={'px-3 py-2 rounded text-sm font-bold text-OffWhite bg-InputBG'}>
            {text}
        </Text>
    )
}

export default BoxComponent