import { View, Text } from 'react-native'
import React from 'react'

const GreenBox = () => {
  return (
    <View className="flex p-[5px] justify-center items-center rounded-md bg-Success">
      <Text className="text-center text-[8px] font-normal text-textWhite">Confirmed</Text>
    </View>
  )
}

export default GreenBox