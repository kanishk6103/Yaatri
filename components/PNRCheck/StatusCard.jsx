import { View, Text } from 'react-native'
import React from 'react'
import RedBox from './RedBox'
import GreenBox from './GreenBox'

const StatusCard = ({passenger}) => {
  return (
    <View className="flex flex-col py-[6px] px-[10px] w-[97px] h-[60px] bg-borderColor rounded-xl my-1">
      <View className="flex flex-row justify-between items-center self-stretch">
        <Text className="text-xs font-normal text-textWhite">{passenger.Number}</Text>
        <View className="w-[53px] h-[26px]">{passenger.ConfirmTktStatus==="Confirm"?<GreenBox/>:<RedBox/>}</View>
      </View>
      {passenger.ConfirmTktStatus==="Confirm"
      ?<View className="flex flex-row justify-between">
          <Text className="text-xs font-extrabold text-SecondaryFont">{passenger.Coach}</Text>
          <Text className="text-xs font-extrabold text-SecondaryFont">{passenger.Berth}</Text>
      </View>
      :null}
    </View>
  )
}

export default StatusCard