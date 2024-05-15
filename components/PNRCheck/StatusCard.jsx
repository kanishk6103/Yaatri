import { View, Text } from 'react-native'
import React from 'react'
import Box from './Box'

const StatusCard = ({ passenger }) => {
  return (
    <View className="flex flex-col py-[6px] px-[10px] w-[97px] h-[60px] bg-borderColor rounded-xl my-1">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-xs font-normal text-textWhite">{passenger.Number}</Text>
        <View className="mx-1 my-1">{passenger.ConfirmTktStatus === "Confirm" ? <Box confirmed={true} /> : <Box confirmed={false} />}</View>
      </View>
      {passenger.ConfirmTktStatus === "Confirm"
        ? <View className="flex flex-row justify-between">
          <Text className="text-xs font-extrabold text-SecondaryFont">{passenger.Coach}</Text>
          <Text className="text-xs font-extrabold text-SecondaryFont">{passenger.Berth}</Text>
        </View>
        : null}
    </View>
  )
}

export default StatusCard