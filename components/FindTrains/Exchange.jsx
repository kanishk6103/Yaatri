import { View, Text, Image } from 'react-native'
import ExchangeComponent from '../../assets/Components/ExchangeComponent'
import SvgUri from "react-native-svg"
import React from 'react'
import DottedLine from "../../assets/Components/DottedLine"

const Exchange = () => {
    return (
        <View className="flex items-center justify-center z-10">
            <Text><ExchangeComponent /></Text>
        </View>
    )
}

export default Exchange