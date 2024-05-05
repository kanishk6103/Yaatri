import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
const TrainRunningScreen = ({ navigation }) => {
    return (
        <View>
            <Text className=''>TrainRunningScreen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default TrainRunningScreen