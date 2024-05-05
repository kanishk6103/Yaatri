import { View, Text } from 'react-native'
import React from 'react'

const RedBox = () => {
  return (
    <View className="flex p-[5px] justify-center items-center rounded-md bg-Rejection">
      <Text className="text-center text-[8px] font-normal text-textWhite">Waiting</Text>
    </View>
  )
}

export default RedBox