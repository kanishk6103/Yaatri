import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'
const HomeScreen = ({ navigation }) => {
    return (
        <View className='text-red-600'>
            <Text className=''>Home</Text>
            <Text className='' onPress={() => navigation.navigate("PNR Status")}>PNR</Text>
            <Text className='' onPress={() => navigation.navigate("TrainStatus")}>Train Live</Text>
            <Text className='' onPress={() => navigation.navigate("FindTrains")}>Find Trains</Text>
        </View>
    )
}

export default HomeScreen